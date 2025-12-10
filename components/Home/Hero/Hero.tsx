"use client"

import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'
import ParticlesHero from './ParticleBackground'

const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden'>
      <ParticlesHero />
      
      <div className='relative z-10 container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
          
          {/* Left side - Text content */}
          <div className='flex-1 flex flex-col items-center lg:items-start text-center lg:text-left'>
            <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide'>
              Creating web products,<br /> 
              brands <span className='text-cyan-200'>and experiences.</span>
            </h1>

            <h2 className='mt-5 text-sm sm:text-2xl font-medium flex flex-wrap items-center justify-center lg:justify-start'>
              Hi! I&apos;m Vivek - A Passionate 
              <span className='text-cyan-200 font-bold'>
                <Typewriter options={{
                  strings:[
                    'Frontend Developer',
                    'Backend Developer',
                    'Competitive Programmer'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  wrapperClassName: 'pl-2'
                }} />
              </span>
            </h2>
            
            <button className='mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium flex items-center'>
              <span>See my work</span>
              <BsArrowRight className='w-5 h-5 ml-2' />
            </button>
          </div>

          {/* Right side - Image */}
          <div className='flex-shrink-0'>
            <img 
              src="/images/resize.jpg" 
              alt="heroimage" 
              height={140} 
              width={150} 
              className='rounded-xl border-8 border-[#0c0c48aa] w-40 h-40 lg:w-64 lg:h-64 object-cover' 
              
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero