const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3002;

const filePath = path.join(__dirname, "data", "data.json")

app.use(cors());
app.use(express.json());



app.get('/api/tasks', (req, res) => {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.status(500).json({ err: "failed to load data!" })
        } else {
            const parsedData = JSON.parse(data)
            res.status(200).json(parsedData)
        }
    })
});

app.post('/api/tasks/add', (req, res) => {
    const { taskTitle, taskDetail, siteLink, codeLink, technology } = req.body;

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.status(500).json({ err: "failed to add data!" })
        } else {
            const id = Date.now();
            const newData = {
                title: taskTitle || "No Title",
                detail: taskDetail || "No Description",
                siteLink: siteLink || null,
                codeLink: codeLink || null,
                technology: technology || null,
                createdAt: new Date().toISOString()
            };
            const parsedData = JSON.parse(data)
            const updateFileData = { ...parsedData, [id]: { ...newData } }
            fs.writeFile(filePath, JSON.stringify(updateFileData), (err) => {
                if (err) {
                    console.error("Error writing file:", err);
                    res.status(500).json({ err: "Error adding data" });
                } else {
                    res.json(updateFileData);
                }
            });
        }
    })
});

app.post('/api/tasks/update/:id', (req, res) => {
    const { id } = req.params;
    const { title, detail, siteLink, codeLink, technology, createdAt } = req.body;

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.status(500).json({ err: "failed to update data!" })
        } else {
            const newData = {
                title: title || "No Title",
                detail: detail || "No Description",
                siteLink: siteLink || null,
                codeLink: codeLink || null,
                technology: technology || null,
                createdAt: createdAt
            };
            const parsedData = JSON.parse(data)
            const updateFileData = { ...parsedData, [id]: { ...newData } }
            fs.writeFile(filePath, JSON.stringify(updateFileData), (err) => {
                if (err) {
                    console.error("Error writing file:", err);
                    res.status(500).json({ err: "Error updating data" });
                } else {
                    res.json(updateFileData);
                }
            });
        }
    })
});

app.post('/api/tasks/delete/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.status(500).json({ err: "failed to delete data!" })
        }
        else {
            const jsonData = JSON.parse(data);
            const remainingData = {}
            Object.keys(jsonData).map((key) => {
                if (key !== id) {
                    remainingData[key] = { ...jsonData[key] }
                }
            })
            fs.writeFile(filePath, JSON.stringify(remainingData), (err) => {
                if (err) {
                    console.error("Error writing file:", err);
                    res.status(500).json({ err: "Error delteting data" });
                } else {
                    res.json(remainingData);
                }
            });
        }
    })
})



app.use(express.static(path.join(__dirname, 'dist')));

// Get all tasks
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


app.use((req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
