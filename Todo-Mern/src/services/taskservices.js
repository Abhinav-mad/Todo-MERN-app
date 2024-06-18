import axios from 'axios';

const API_URL = 'http://localhost:3000/api/tasks';

const getTasks = () => axios.get(API_URL);
const createTask = (task) => axios.post(API_URL, task);
const getTask = (id) => axios.get(`${API_URL}/${id}`);
const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);

export default {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
