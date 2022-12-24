import {Route, Routes, Link} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './container/Home'
import Footer from './container/Footer'


function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
