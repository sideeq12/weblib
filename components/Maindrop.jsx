"use client";
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';


const Maindrop = () => {
    const [isActive, setActive ] = useState(false);
    const [open, setOpen] = useState(true)

    const changeView = () => {
        setActive(!isActive)
    }

  return (<>
        {open ?  <div className='w-fit z-10 md:w-3/12 bg-white flex flex-col gap-2 pl-10 pt-16 pb-10'>
            <span onClick={(open)=>setOpen(!open)} className='cursor-pointer ml-auto mr-16'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
            </span>
            <div className='mt-20 ml-10'>Logo</div>
            <Link className='hover:border-l-2  md:py-3 hover:border-black pl-10 cursor-pointer'
             href="/">Overview</Link>

         <div className=''>
         <button onClick={changeView}
            className='hover:border-l-2 md:py-3 hover:border-black pl-10 cursor-pointer' 
            >Introduction to HTML</button>
            { isActive ? <div className='border-2 pt-3 border-gray-500 pl-10 mt-5 flex flex-col gap-4'>
            <Link href="/">Html tags</Link>
            <Link href="/">Html tags</Link>
            <Link href="/">Html tags</Link>
            <Link href="/">Html tags</Link>
            <Link href="/">Html tags</Link>
            <Link href="/">Html tags</Link>
            <Link href="/">Html tags</Link>
            <Link href="/">Html tags</Link>
            <Link href="/">Html tags</Link>
            <Link href="/">Html tags</Link>
            </div> : null}
         </div>

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
        </div>: <span className='px-10 pt-10 mr-10 bg-white' >
        <svg onClick={(open)=>setOpen(!open)} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
            </span>}
  </>
  )
}

export default Maindrop