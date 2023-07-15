"use client";
import Link from 'next/link';
import React from 'react'


const Maindrop = () => {
  return (
        <div className='w-fit z-10 md:w-2/6 bg-white flex flex-col gap-8 pl-10 pt-16 pb-10'>
            <div className='mt-20 ml-10'>Logo</div>
            <Link className='hover:border-l-2  md:py-3 hover:border-black pl-10 cursor-pointer'
             href="/">Overview</Link>

            <Link 
            className='hover:border-l-2 md:py-3 hover:border-black pl-10 cursor-pointer' 
            href="/">Introduction to HTML</Link>

            <Link 
            className='hover:border-l-2 md:py-3 hover:border-black pl-10 cursor-pointer'
            href="/">Introduct to CSS</Link>

            <Link className='hover:border-l-2
            md:py-3 hover:border-black pl-10 cursor-pointer'
             href="/">Resources</Link>

            <Link className='hover:border-l-2 md:py-3 hover:border-black pl-10 cursor-pointer'
             href="/">Project List</Link>

            <Link  className='hover:border-l-2 hover:border-black md:py-3 pl-10 cursor-pointer' 
            href="/">Design catalogue</Link>

            <Link className='hover:border-l-2 md:py-3 hover:border-black pl-10 cursor-pointer'
             href="/">Ask a question</Link>
        </div>
  )
}

export default Maindrop