import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <section id='resume' aria-labelledby='resume-heading' className='py-12 px-4 md:px-8 lg:px-16'>
      <div className='max-w-7xl mx-auto'>
        <h2 id='resume-heading' className='sr-only'>Resume</h2>

        <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-10'>
          {/* Work Part */}
          <div className='w-full md:w-1/2'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>
              My Work <span className='text-cyan-200'>Experience</span>
            </h1>

            <div className='mt-6 space-y-6' data-aos="zoom-in" data-aos-anchor-placement="top-center">
              <ResumeCard 
                Icon={FaCodepen} 
                role='Self Employed - Full Stack Developer'
                date='Jan 2024 - Present'
                description='Building modern web applications using React, Node.js, and databases. Specializing in creating responsive, user-friendly interfaces and scalable backend solutions for clients across various industries.'
              />
              <ResumeCard 
                Icon={FaReact} 
                role='Frontend Developer'
                date='Aug 2023 - Present'
                description='Developed interactive and responsive user interfaces using React, TypeScript, and Tailwind CSS. Focused on creating seamless user experiences with modern design patterns and optimal performance.'
              />
              <ResumeCard 
                Icon={BsDatabase} 
                role='Backend Developer'
                date='Mar 2023 - Present'
                description='Designed and implemented RESTful APIs and database architectures using Node.js, Express, and MongoDB. Ensured data integrity, security, and efficient server-side logic for web applications.'
              />
            </div>
          </div>

          {/* Divider on larger screens */}
          <div className='hidden md:block md:h-auto md:w-px bg-neutral-800/50' aria-hidden='true' />

          {/* Education Part */}
          <div className='w-full md:w-1/2'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>
              My <span className='text-cyan-200'>Education</span>
            </h1>

            <div className='mt-6 space-y-6' data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
              <ResumeCard 
                Icon={BiBadge} 
                role='Guru Ghasidas University' 
                date='Oct 2023 - Jul 2027'
                description='Pursuing Bachelor of Technology in Computer Science. Gaining strong foundation in data structures, algorithms, software engineering, and web development. Active participant in coding competitions and technical clubs.'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
