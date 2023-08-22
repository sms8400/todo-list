import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';
import  Login  from './components/SignUp/Login';
import ToDoList from './components/ToDo/TodoList';
import Completed from './components/Completed/Completed';

function App() {
  return (
    <div className="App">
 

<BrowserRouter>

  <Routes>
  <Route path="/" element={<SignUp />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/todolist" element={<ToDoList />}/>
  <Route path="/completed" element={<Completed />}/>
  </Routes>

</BrowserRouter>


    
    </div>
  );
}

export default App;