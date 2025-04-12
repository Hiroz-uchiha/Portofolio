import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import "../Assets/style.css"
import Skills from './Skills'
import Project from './Project'
import DetailProject from './DetailProject'

const Home = () => {    
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
        <section id="skills">
          <Skills />
        </section>
        <section id='projects'>
          <Project />
        </section>
      </div>
    </div>
  )
}

export default Home
