import React from "react";
import { Link } from "react-router-dom";

function Todoitem({ task, onDelete }) {
  return (
    <div className="border border-2 shadow p-2 m-2">
      <div className="task">
        <h3>{task.title}</h3>
        <div className=" container d-flex justify-content-between">
           <div className=" container justify-content-between border">
           <p>{task.description}</p>

           </div>

          <div className=" container d-flex " >
            <button
              className="btn btn-danger m-2"
              onClick={() => onDelete(task._id)}
            >
              Delete
            </button>
            <Link
              className="btn edit-btn btn-info m-2"
              to={`/edit/${task._id}`}
            >
              Edit
            </Link>
          </div>
        </div>
        <p className="border bg-primary m-1 w-25 rounded shadow text-light text-center">
          {task.completed ? "Completed" : "Incomplete"}
        </p>
      </div>
    </div>
  );
}

export default Todoitem;
