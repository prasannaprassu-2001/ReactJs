import React from 'react';
import Navbar from '../components/Navbar';

import HeroIn2 from '../components/HeroIn2';
import PricingCard  from '../components/PricingCard';
import Footer from '../components/Footer';
import Work from '../components/Work';

let Project = () => {
  return(
    <>
 <Navbar/>
<HeroIn2 heading="PROJECTS." text="Some of my most Recent Works."/>
<Work/>
<PricingCard/>
<Footer/>


    </>
  )
}

export default Project 
