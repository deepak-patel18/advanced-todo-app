import React from "react";

const TaskItem = ({ task, index, deleteTask, toggleComplete }) => {
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? "text-decoration-line-through" : ""}`}>
      <div>
        <strong>{task.text}</strong> - {task.dueDate ? `Due: ${task.dueDate}` : "No due date"} - <span className={`badge bg-${task.priority === "High" ? "danger" : task.priority === "Medium" ? "warning" : "success"}`}>{task.priority}</span>
      </div>
      <div>
        <button className="btn btn-success btn-sm me-2" onClick={() => toggleComplete(index)}>✔</button>
        <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>🗑</button>
      </div>
    </li>
  );
};

export default TaskItem;
