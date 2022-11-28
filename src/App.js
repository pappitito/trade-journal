import React from 'react'
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import './App.css';
import Landing from './pages/landingPage'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'





function App() {

  return (
    <div className="App">
    <BrowserRouter basename='/trade-journal'>
        <Routes>
            <Route exact path='/trade-journal' element={<Landing />} />
            <Route   path='login' element={<Login />} />
            <Route  path='register' element={<Register />} />
            <Route exact path='register/dashboard' element={<Dashboard />} />
            <Route exact path='login/dashboard' element={<Dashboard />} />
           
        </Routes>
    </BrowserRouter>
   
  
</div>
  )
}

export default App;
