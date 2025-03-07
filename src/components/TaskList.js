import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./TaskList.css";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <TransitionGroup component="ul" className="list-group mt-3">
      {tasks.map((task, index) => (
        <CSSTransition key={index} timeout={500} classNames="fade">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {task}
            <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>
              ❌ Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TaskList;
