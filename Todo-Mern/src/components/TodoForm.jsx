import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import taskservices from '../services/taskservices';
import { Col, Row } from 'react-bootstrap';

function TodoForm() {
    const [task, setTask] = useState({ title: '', description: '', completed: false });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    if (id) {
      fetchTask(id);
    }
  }, [id]);

  const fetchTask = async (id) => {
    try {
      const response = await taskservices.getTask(id);
      setTask(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await taskservices.updateTask(id, task);
      } else {
        await taskservices.createTask(task);
      }
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };
  
    return (
     <div className='my-5'>
        <Row className="justify-content-center">
            <Col xs={12} md={8} lg={8} className="border border-1 shadow p-2" >
            
    <h2>{id ? 'Edit Task' : 'Add Task'}</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control" name="title" value={task.title} onChange={handleChange} required /> 
      </div>
      <div className="form-group">
        <label>Description</label>
        <input type="text" className="form-control" name="description" value={task.description} onChange={handleChange} />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" name="completed" checked={task.completed} onChange={() => setTask({ ...task, completed: !task.completed })} />
        <label className="form-check-label">Completed</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

            </Col>
        </Row>
  </div>
  )
}

export default TodoForm