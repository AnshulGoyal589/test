import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import ContactPage from './Pages/ContactPage'
import About from './Pages/About'
import Team from './Pages/Team'
import Stats from './Pages/Stats'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/stats" element={<Stats/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App