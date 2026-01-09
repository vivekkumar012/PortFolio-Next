import React from 'react'
import { FaCodepen, FaReact, FaNodeJs, FaPython, FaAws } from 'react-icons/fa'
import { SiMongodb, SiPostgresql, SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si'
import { BiBadge, BiBook } from 'react-icons/bi'
import { IconType } from 'react-icons'

type ResumeCardProps = {
  role: string
  Icon: IconType
  date?: string
  company?: string
  institution?: string
  description: string
  techStack?: string[]
}

export const ResumeCard = ({ Icon, role, date, company, institution, description, techStack }: ResumeCardProps) => {
  return (
    <div className='group relative'>
      {/* Gradient border effect */}
      <div className='absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-500'></div>
      
      <div className='relative flex items-start space-x-4 sm:space-x-6 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 p-5 sm:p-7 rounded-lg shadow-lg hover:shadow-cyan-500/10'>
        {/* Icon */}
        <div className='sm:w-16 sm:h-16 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300'>
          <Icon className='sm:w-8 sm:h-8 w-6 h-6 text-white' />
        </div>

        <div className='flex-1 min-w-0'>
          {/* Date Badge */}
          {date && (
            <div className='mb-3 inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm'>
              <span className='text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide'>
                {date}
              </span>
            </div>
          )}

          {/* Role */}
          <h3 className='text-white text-lg sm:text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors duration-300'>
            {role}
          </h3>

          {/* Company/Institution */}
          {(company || institution) && (
            <p className='text-cyan-400/80 text-sm sm:text-base font-medium mb-3'>
              {company || institution}
            </p>
          )}

          {/* Description */}
          <p className='text-slate-300 text-sm sm:text-base leading-relaxed mb-4'>
            {description}
          </p>

          {/* Tech Stack */}
          {techStack && techStack.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className='px-3 py-1 text-xs sm:text-sm font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300'
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}