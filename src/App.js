import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Weather from "./components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";  // Make sure to include a styles file for dark mode

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("date");
  const [darkMode, setDarkMode] = useState(false);

  // Load tasks and theme from local storage on startup
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    const savedTheme = localStorage.getItem("darkMode");

    if (savedTasks) setTasks(savedTasks);
    if (savedTheme === "true") setDarkMode(true);
  }, []);

  // Save tasks to local storage when changed
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Handle dark mode and apply class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true"); 
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortOption === "date") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else if (sortOption === "priority") {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return 0;
  });

  return (
    <div className={`container mt-4 ${darkMode ? "dark-mode-container" : ""}`}>
      <h2 className="text-center">Advanced To-Do App</h2>
      <Weather />
      
      {/* Dark Mode Toggle Button */}
      <div className="text-center mb-3">
        <button 
          className="btn btn-secondary"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </div>

      <TaskInput addTask={addTask} />

      <div className="d-flex gap-2 mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="form-select"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="date">Sort by Due Date</option>
          <option value="priority">Sort by Priority</option>
        </select>
      </div>

      <TaskList tasks={sortedTasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
