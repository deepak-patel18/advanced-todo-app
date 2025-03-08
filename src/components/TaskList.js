import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  if (!Array.isArray(tasks)) {
    console.error("tasks is not an array:", tasks);
    return <p>Error: Task list is corrupted</p>;
  }

  return (
    <ul className="list-group mt-3">
      {tasks.length === 0 ? (
        <p className="text-center">No tasks found</p>
      ) : (
        tasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} deleteTask={deleteTask} toggleComplete={toggleComplete} />
        ))
      )}
    </ul>
  );
};

export default TaskList;
