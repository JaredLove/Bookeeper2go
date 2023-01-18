
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import Home from './pages/Home'
import Login from './pages/Login';
import Services from './pages/Services';
import About from './pages/About';
import Signup from './pages/Signup'
import './App.css';

function App() {
  return (
    <div className='hero'>
  <BrowserRouter>
  <Nav></Nav>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/aboutme' element={<About/>} />
    <Route path='/services' element={<Services/>} />
  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App;
