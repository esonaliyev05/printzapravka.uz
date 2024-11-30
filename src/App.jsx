import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './Page/Home'
import About from './Page/About'
import Brand from './Page/Brand'
import Uslug from './Page/Uslug'
import Mastercall from './Page/Mastercall'
import Footer from './components/Footer/Footer'

const App = () => {

  
  return (
    <>
    <BrowserRouter>

    <Navbar/>
    {/* <Router> */}
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='brand' element={<Brand/>}/>
      <Route path='uslug' element={<Uslug/>}/>
      <Route path='mastercall' element={<Mastercall/>}/>

      </Routes>
    {/* </Router> */}
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App