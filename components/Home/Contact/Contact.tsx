"use client"

import React, { useState } from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { BsGithub, BsLinkedin, BsSend, BsTwitterX } from 'react-icons/bs'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    // Add your form submission logic here
    alert('Message sent successfully!')
  }

  return (
    <section id='contact' className='py-16 px-4 md:px-8 lg:px-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-16'>
          
          {/* Left Side - Contact Info */}
          <div className='flex-1'>
            <h1 className='text-gray-200 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight'>
              Schedule a call with <br /> 
              me to see if I can <br /> 
              <span className='text-cyan-300'>help you grow</span>
            </h1>
            
            <p className='text-gray-400 text-base sm:text-lg mt-6 leading-relaxed'>
              Reach out to me today and let's discuss how I can help you achieve your goals and bring your ideas to life.
            </p>
            
            <div className='mt-10 space-y-6'>
              <div className='flex items-center space-x-4 group'>
                <div className='w-12 h-12 bg-blue-950/50 rounded-lg flex items-center justify-center group-hover:bg-blue-900/50 transition-colors duration-300'>
                  <BiPhone className='w-6 h-6 text-cyan-300' />
                </div>
                <div>
                  <p className='text-gray-500 text-sm'>Phone</p>
                  <p className='text-lg font-semibold text-gray-200'>
                    +91 7646812522
                  </p>
                </div>
              </div>

              <div className='flex items-center space-x-4 group'>
                <div className='w-12 h-12 bg-blue-950/50 rounded-lg flex items-center justify-center group-hover:bg-blue-900/50 transition-colors duration-300'>
                  <BiEnvelope className='w-6 h-6 text-cyan-300' />
                </div>
                <div>
                  <p className='text-gray-500 text-sm'>Email</p>
                  <p className='text-lg font-semibold text-gray-200'>
                    vivekumar7510@gmail.com
                  </p>
                </div>
              </div>

              <div className='flex items-center space-x-4 group'>
                <div className='w-12 h-12 bg-blue-950/50 rounded-lg flex items-center justify-center group-hover:bg-blue-900/50 transition-colors duration-300'>
                  <BiMap className='w-6 h-6 text-cyan-300' />
                </div>
                <div>
                  <p className='text-gray-500 text-sm'>Location</p>
                  <p className='text-lg font-semibold text-gray-200'>
                    Bilaspur, Chhattisgarh
                  </p>
                </div>
              </div>

              <div className='flex items-center mt-8 space-x-3'>
                <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-950 transition-all duration-300'>
                    <BsGithub className='text-white w-6 h-6' />
                </div>
                <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
                    <BsLinkedin className='text-white w-6 h-6' />
                </div>
                <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-black transition-all duration-300'>
                    <BsTwitterX className='text-white w-6 h-6' />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className='flex-1'>
            <div className='bg-gradient-to-br from-blue-950/40 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-900/30 shadow-2xl'>
              <h2 className='text-2xl sm:text-3xl font-bold text-white mb-2'>
                Send me a <span className='text-cyan-300'>message</span>
              </h2>
              <p className='text-gray-400 text-sm mb-8'>
                Fill out the form below and I'll get back to you soon
              </p>

              <div className='space-y-5'>
                <div>
                  <label htmlFor='name' className='block text-gray-300 text-sm font-medium mb-2'>
                    Full Name
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    placeholder='John Doe'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg text-white bg-gray-800/50 border border-gray-700 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 placeholder:text-gray-500'
                  />
                </div>

                <div>
                  <label htmlFor='email' className='block text-gray-300 text-sm font-medium mb-2'>
                    Email Address
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='john@example.com'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg text-white bg-gray-800/50 border border-gray-700 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 placeholder:text-gray-500'
                  />
                </div>

                <div>
                  <label htmlFor='mobile' className='block text-gray-300 text-sm font-medium mb-2'>
                    Mobile Number
                  </label>
                  <input
                    id='mobile'
                    name='mobile'
                    type='tel'
                    placeholder='+91 98765 43210'
                    value={formData.mobile}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg text-white bg-gray-800/50 border border-gray-700 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 placeholder:text-gray-500'
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-gray-300 text-sm font-medium mb-2'>
                    Your Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    placeholder='Tell me about your project...'
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg text-white bg-gray-800/50 border border-gray-700 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 placeholder:text-gray-500 resize-none'
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className='w-full px-6 py-4 rounded-lg bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/20 group'
                >
                  <span>Send Message</span>
                  <BsSend className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact