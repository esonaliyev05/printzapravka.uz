import React from 'react'
import Main from '../components/Home/Main/Main'
import Onaus from '.././components/Home/Onaus/Onaus.jsx'
import Plotter from '../components/Home/Plotter/Plotter.jsx'
import Features from '../components/Home/Features/Features.jsx'
import Servis from '../components/Home/Servis/Servis.jsx'
import Customer from '../components/Home/Customer/Customer.jsx'
import Footer from '../components/Footer/Footer.jsx'


const Home = () => {
  return (
    <>
    <home>
      <Main/>
      <Onaus/>
      <Plotter/>
      <Features/>
      <Servis/>
      <Customer/>
      <Footer/>
    </home> 
    </>
  )
}

export default Home