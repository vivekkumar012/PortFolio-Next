import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'


type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({closeNav, showNav}: Props) => {

    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]';

  return (
    <>
      {/* Overlay - only visible when showNav is true */}
      {showNav && (
        <div 
          onClick={closeNav}
          className="fixed inset-0 bg-black bg-opacity-70 z-[10000] transition-opacity duration-500"
        ></div>
      )}
      
      {/* NavLinks */}
      <div className={`text-white fixed top-0 right-0 justify-center flex flex-col h-full transform transition-all duration-500 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[10001] ${navOpen}`}>
        {NavLinks.map((link) => {
            return (
              <Link 
                key={link.id} 
                href={link.url} 
                onClick={closeNav}
                className="z-10"
              >
                <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] hover:text-cyan-200 transition-colors cursor-pointer'>
                  {link.label}
                </p>
              </Link>
            )
        })}

        {/* CrossIcon */}
        <CgClose 
          onClick={closeNav} 
          className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer hover:rotate-90 transition-transform duration-300 z-10'
        />
      </div>
    </>
  )
}

export default MobileNav