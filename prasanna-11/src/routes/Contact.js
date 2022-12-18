import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroIn2 from '../components/HeroIn2'
import Form from '../components/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroIn2 heading="CONTACT." text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
