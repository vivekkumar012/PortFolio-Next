"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Coding from './Coding/Coding'
import Contact from './Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    // Remove the async wrapper and import
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom"
    });
    
    // Refresh AOS on route changes (optional but helpful)
    AOS.refresh();
  }, [])
  
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <Coding />
      <Contact />
    </div>
  )
}

export default Home