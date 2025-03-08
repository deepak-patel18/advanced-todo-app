import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    const newTask = {
      text,
      dueDate: dueDate || new Date().toISOString().split("T")[0],
      priority,
      completed: false,
    };

    addTask(newTask);
    setText("");
    setDueDate("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="date"
        className="form-control mt-2"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select
        className="form-select mt-2"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="Low">Low Priority</option>
      </select>
      <button type="submit" className="btn btn-primary mt-2">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
