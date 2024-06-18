import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Todoitem from "./Todoitem";
import taskservices from "../services/taskservices";
import { Link } from "react-router-dom";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await taskservices.getTasks();
      setTasks(response.data);
    } catch (err) {
        toast.error(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await taskservices.deleteTask(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
        toast.error(err.message);
    }
  };

  
  return (
    <div>
      <ToastContainer />  
      <div className="body-container py-5">     
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={8} className="border border-1 shadow p-2">
          <div className="d-flex justify-content-center">
          <Link to="/add" className="btn btn-primary mb-3 ">
              Add Task
            </Link>
          </div>
            
            {tasks.length == 0 ? (
              <h3 className="text-black text-2xl font-bold my-2">
                Sorry! No Todos Found.
              </h3>
            ) : (
              tasks.map((task) => ( 
                <Todoitem key={task._id} task={task} onDelete={handleDelete} /> //each tasks are passed as props to
              ))
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Todolist;
