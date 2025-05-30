import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Contacts from './Pages/Contacts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
