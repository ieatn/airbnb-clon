import {Route, Routes, Link} from 'react-router-dom'
import './App.css'
import {Navbar} from './components'
import {Home, Footer} from './container'


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
