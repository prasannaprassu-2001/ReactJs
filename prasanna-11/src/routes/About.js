import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'

import HeroIn2 from '../components/HeroIn2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroIn2 heading="About." text="Im a friendly Front-End Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
