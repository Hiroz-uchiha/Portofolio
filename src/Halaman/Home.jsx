import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import "../Assets/style.css"
import Skills from './Skills'
import Project from './Project'
import DetailProject from './DetailProject'
import ContactMe from './ContactMe'
import FooterPorto from './FooterPorto'

const Home = () => {    
  return (
    <div>
      <div className=' scroll-smooth'>
        <Navbar />
        <div className='md:pt-20'>
          <section id='introduction'>
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
          <section id='contact'>
            <ContactMe />
          </section>
            <FooterPorto />
        </div>

        </div>
    </div>
  )
}

export default Home
