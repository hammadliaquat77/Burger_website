import {Routes, Route } from "react-router-dom";
import './App.css'

import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Shop from './pages/Shop'

function App() {

  return (
    <>

     <Home />
     <Menu/>
     <Shop/>
     <About/>
     <Footer/> 
    </>
  )
}

export default App
