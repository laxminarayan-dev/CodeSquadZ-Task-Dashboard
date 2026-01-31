const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3002;
const compression = require("compression");
const filePath = path.join(__dirname, "data", "data.json")

let cachedData = {}

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist'), {
    maxAge: '1y',
    immutable: true
}));

const loadTasks = () => {
    try {
        const raw = fs.readFileSync(filePath, "utf8");
        cachedData = JSON.parse(raw);
    } catch (err) {
        console.error("Failed to load tasks", err);
    }
};

loadTasks();


app.get('/api/tasks', (req, res) => {
    res.status(200).json(cachedData);
});

app.post('/api/tasks/add', (req, res) => {
    const { taskTitle, taskDetail, siteLink, codeLink, technology } = req.body;
    const id = Date.now();
    const newData = {
        title: taskTitle || "No Title",
        detail: taskDetail || "No Description",
        siteLink: siteLink || null,
        codeLink: codeLink || null,
        technology: technology || null,
        createdAt: new Date().toISOString()
    };
    const updateFileData = { ...cachedData, [id]: { ...newData } }
    cachedData = updateFileData
    fs.writeFile(filePath, JSON.stringify(updateFileData, null, 2), (err) => {
        if (err) {
            console.error("Error writing file:", err);
            res.status(500).json({ err: "Error adding data" });
        } else {
            res.json(updateFileData);
        }
    });
});

app.post('/api/tasks/update/:id', (req, res) => {
    const { id } = req.params;
    const { title, detail, siteLink, codeLink, technology, createdAt } = req.body;


    const newData = {
        title: title || "No Title",
        detail: detail || "No Description",
        siteLink: siteLink || null,
        codeLink: codeLink || null,
        technology: technology || null,
        createdAt: createdAt
    };
    const updateFileData = { ...cachedData, [id]: { ...newData } }
    cachedData = updateFileData;
    fs.writeFile(filePath, JSON.stringify(updateFileData, null, 2), (err) => {
        if (err) {
            console.error("Error writing file:", err);
            res.status(500).json({ err: "Error updating data" });
        } else {
            res.json(updateFileData);
        }
    });
});

app.post('/api/tasks/delete/:id', (req, res) => {
    const { id } = req.params;
    const remainingData = {}
    Object.keys(cachedData).forEach(key => {
        if (key !== id) {
            remainingData[key] = { ...cachedData[key] }
        }
    })
    cachedData = remainingData
    fs.writeFile(filePath, JSON.stringify(remainingData, null, 2), (err) => {
        if (err) {
            console.error("Error writing file:", err);
            res.status(500).json({ err: "Error delteting data" });
        } else {
            res.json(remainingData);
        }
    });
})




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