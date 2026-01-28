import { useEffect, useState } from "react";
import Card from "../compononts/Card";

function Tasks({ tasks, fetchTasks }) {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const catergory = [];
    if (Object.keys(tasks).length > 0) {
      Object.entries(tasks).map((task) => {
        if (!catergory.includes(task[1]["technology"])) {
          catergory.push(task[1]["technology"]);
        }
      });
    }
    setTechnologies(catergory);
  }, [tasks]);

  return (
    <div className="p-6">
      {/* header */}
      <h1 className="text-2xl font-bold text-slate-900">Tasks</h1>
      {/* body */}
      <div className="mt-2">
        <p className="text-slate-600">Manage your tasks here.</p>
      </div>
      <div className="mt-8">
        {tasks &&
          technologies.map((category) => (
            <div key={category} className="mb-6">
              <h2 className="text-xl font-semibold capitalize mb-4">
                {category.replace(/-/g, " ")}
              </h2>
              <div
                className={`grid-scroll grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-6 overflow-y-auto p-4 ${Object.keys(tasks).length > 0 && technologies.length > 0 ? "max-h-[calc(100dvh-12rem)]" : "min-h-[calc(100dvh-12rem)]"} `}
              >
                {technologies.length > 0 ? (
                  Object.entries(tasks).map((task) => {
                    if (task[1]["technology"] === category) {
                      return (
                        <Card
                          key={task[0]}
                          data={task}
                          editable={true}
                          fetchTasks={fetchTasks}
                        />
                      );
                    }
                  })
                ) : (
                  <p className="text-slate-600">No tasks in this category.</p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Tasks;
