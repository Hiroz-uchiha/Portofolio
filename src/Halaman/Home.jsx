import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import "../Assets/style.css"

const Home = () => {
  // "Home", "About", "Skills", "Projects", "Contact"
    
  return (
    <div>
      <div className=' scroll-smooth'>
        <Navbar />
        <section id='home'>
          <Header />
        </section>
        <section id='about'>
          <About />
        </section>
      </div>
    </div>
  )
}

export default Home
