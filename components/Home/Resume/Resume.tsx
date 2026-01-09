import React from 'react'

import { FaCodepen, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge, BiBook } from 'react-icons/bi'
import { ResumeCard } from './ResumeCard'

const Resume = () => {
  return (
    <section id='resume' aria-labelledby='resume-heading' className='py-16 px-4 md:px-8 lg:px-16'>
      <div className='max-w-7xl mx-auto'>
        <h2 id='resume-heading' className='sr-only'>Resume</h2>

        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16'>
          {/* Work Experience Section */}
          <div className='w-full lg:w-1/2'>
            <div className='mb-8'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2'>
                Work <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>Experience</span>
              </h2>
              <div className='w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full'></div>
            </div>

            <div className='space-y-6' data-aos="fade-right" data-aos-duration="800">
              <ResumeCard 
                Icon={FaReact} 
                role='Full Stack Developer'
                company='Freelance / Self-Employed'
                date='Jan 2024 - Present'
                description='Architecting and developing scalable web applications with modern technologies. Delivered 15+ projects featuring responsive UIs, RESTful APIs, and cloud deployments. Specialized in performance optimization and user experience enhancement.'
                techStack={['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Next.js']}
              />

              <ResumeCard 
                Icon={FaCodepen} 
                role='Frontend Developer Intern'
                company='Tech Solutions Inc.'
                date='Jun 2023 - Dec 2023'
                description='Collaborated with cross-functional teams to build dynamic user interfaces. Implemented responsive designs, integrated RESTful APIs, and improved page load times by 40% through code optimization and lazy loading techniques.'
                techStack={['React', 'JavaScript', 'CSS3', 'Redux', 'Git']}
              />
            </div>
          </div>

          {/* Divider */}
          <div className='hidden lg:block lg:h-auto lg:w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent' aria-hidden='true' />

          {/* Education Section */}
          <div className='w-full lg:w-1/2'>
            <div className='mb-8'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2'>
                <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>Education</span>
              </h2>
              <div className='w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full'></div>
            </div>

            <div className='space-y-6' data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <ResumeCard 
                Icon={BiBadge} 
                role='Bachelor of Technology in Information Technology'
                institution='Guru Ghasidas University'
                date='Oct 2023 - Jul 2027'
                description='Building strong foundation in computer science fundamentals including Data Structures, Algorithms, Database Management, and Software Engineering. Active member of coding club with participation in 10+ hackathons. CGPA: 8.5/10'
                techStack={['Java', 'Python', 'DSA', 'DBMS', 'OS', 'CN']}
              />

              <ResumeCard 
                Icon={BiBook} 
                role='Senior Secondary Education (12th)'
                institution='J N College Nehra Darbhanga Bihar'
                date='Apr 2020 - Mar 2022'
                description='Completed higher secondary education with focus on Mathematics and Science. Scored 82% with distinction in Mathematics (95%) and Science (85%). Led school coding club and organized tech workshops.'
                techStack={['C++', 'Mathematics', 'Physics']}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
