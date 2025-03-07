import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Weather from "./components/Weather"; // Import Weather Component

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className={darkMode ? "bg-dark text-white min-vh-100" : "bg-light text-dark min-vh-100"}>
      <div className="container py-5">
        <div className={`card shadow p-4 ${darkMode ? "bg-dark text-white" : ""}`}>
          <h2 className="text-center mb-3">📝 To-Do List</h2>
          <button
            className={`btn ${darkMode ? "btn-light" : "btn-dark"} mb-3`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
          <Weather />  {/* Show Weather Component */}
          <TaskInput addTask={addTask} />
          <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
