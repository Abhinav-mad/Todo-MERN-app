import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Todolist from './components/Todolist';
import TodoForm from './components/TodoForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>

     <Router>
      <div className="container">
      <Routes>
  <Route path="/" element={<Todolist />} />
  <Route path="/add" element={<TodoForm />} />
  <Route path="/edit/:id" element={<TodoForm />} />
</Routes>
      </div>
    </Router>
     
    </>
  )
}

export default App
