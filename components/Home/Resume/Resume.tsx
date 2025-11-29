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

            <div className='mt-6 space-y-6'>
              <ResumeCard Icon={FaCodepen} role='Full Stack Developer' />
              <ResumeCard Icon={FaReact} role='Frontend Developer' />
              <ResumeCard Icon={BsDatabase} role='Backend Developer' />
            </div>
          </div>

          {/* Divider on larger screens */}
          <div className='hidden md:block md:h-auto md:w-px bg-neutral-800/50' aria-hidden='true' />

          {/* Education Part */}
          <div className='w-full md:w-1/2'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>
              My <span className='text-cyan-200'>Education</span>
            </h1>

            <div className='mt-6 space-y-6'>
              <ResumeCard Icon={BiBadge} role='Guru Ghasidas University' date='Oct 2023 - July 2027' />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
