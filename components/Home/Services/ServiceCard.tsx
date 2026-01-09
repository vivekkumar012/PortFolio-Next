import React from 'react'

type Props = {
  icon: string
  name: string
  description: string
}

const ServiceCard = ({ description, icon, name }: Props) => {
  return (
    <div className='group relative h-full'>
      {/* Animated gradient border */}
      <div className='absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-300 animate-tilt'></div>
      
      {/* Card content */}
      <div className='relative h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50 group-hover:border-transparent transition-all duration-500 overflow-hidden'>
        {/* Background pattern */}
        <div className='absolute inset-0 bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,transparent,black)] opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        
        {/* Glow effect */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        
        {/* Content */}
        <div className='relative z-10'>
          {/* Icon container */}
          <div className='relative w-16 h-16 mb-6'>
            <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500'></div>
            <div className='relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-400/40 group-hover:scale-110 transition-all duration-500 shadow-lg'>
              <img 
                src={icon} 
                alt={name}
                width={36} 
                height={36}
                className='group-hover:scale-110 transition-transform duration-500'
              />
            </div>
          </div>

          {/* Title */}
          <h3 className='text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300'>
            {name}
          </h3>

          {/* Description */}
          <p className='text-slate-400 text-sm md:text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-300'>
            {description}
          </p>

          {/* Hover indicator */}
          <div className='mt-6 flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300'>
            <span className='text-sm font-semibold'>Learn more</span>
            <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </div>
        </div>

        {/* Corner accent */}
        <div className='absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
      </div>
    </div>
  )
}

export default ServiceCard;