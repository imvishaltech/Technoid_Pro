import React from 'react'
import Navbar  from "../components/Navbar"
import HomeContent  from "../assets/HomeContent"
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeContent />
      <Footer/>
    </div>
  )
}

export default Home

