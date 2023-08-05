import React from 'react'
import Link from 'next/link'

const Mission = () => {
  return (
    <div className='w-full md:border-t px-5 py-20 md:py-20 md:px-20 '>
        <div className='md:w-3/5  text-center mx-auto'>
        <h2 className='mb-5 font-bold  text-lg'>Mission and focus </h2>
        <p className='mb-10'>Our Focus is to empower individuals with the knowledge and skills to thrive
             in the digital world. We believe that accessible and comprehensive web education is crucial in today's technologically driven society. Our platform is dedicated to providing high-quality, interactive, 
            and practical learning experiences for aspiring web developers.</p>

            <Link href="/" className='border px-6 py-3 text-blue-800 border-blue-800 hover:text-white hover:bg-blue-800'>Start Learning</Link>
        </div>
    </div>
  )
}

export default Mission