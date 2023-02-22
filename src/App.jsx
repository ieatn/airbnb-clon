import {Route, Routes, Link} from 'react-router-dom'
import './App.css'
import {Navbar, Footer} from './components'
import {Home, SearchPage} from './container'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<SearchPage />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
