import './HeroInStyles.css'

import React from 'react'
import IntroImg from '../assets/IntroImg.Jpg'
import { Link } from 'react-router-dom'

const HeroIn = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt='IntroImg'/>
        </div>
      <div className="content">
        <p>HI,I'M SANA.</p>
        <h1>React Developer</h1>
        <div>
            <Link to='/projects' className='btn'>Projects</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroIn
