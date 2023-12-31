"use client";
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import logo from '../app/big-book.png'
import Image from 'next/image';


const Maindrop = () => {
    const [isActive, setActive ] = useState(false);
    const [open, setOpen] = useState(true);
    const [csview, setCsview ] = useState(false);

    const changeView = () => {
        setActive(!isActive)
    }
    const setToOpen = ()=>{
      setOpen(true);
    }
    const changeCs = ()=>{
      setCsview(!csview);
    }

  return (<>
        {open ? 
         <div className='w-9/12 bg-blue-900 text-sm pr-3 md:pr-10 z-10 pos  md:w-3/12 
         flex flex-col gap-2 pl-3 md:pl-6 pt-16 pb-5'>
            <span onClick={(open)=>setOpen(!open)} className='cursor-pointer ml-auto '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
            </span>
            <div className='mt-10 ml-10 mb-10'>
              <Image src={logo} width={100} height={100} alt='' />
              <div className="span font-bold text-white">COACHLIB</div>
            </div>
            <Link className='hover:border-l-2 
            flex  pr-6 w-11/12 md:py-3 border text-white border-white rounded-lg
            hover:bg-white hover:text-blue-800 pl-6 cursor-pointer' 
             href="/overview">Overview</Link>

         <div className=''>
         <button onClick={changeView}
            className='hover:border-l-2 
            flex pr-3 md:pr-6 py-1 text-sm md:py-3 border border-white text-white rounded-lg
            hover:bg-white hover:text-blue-800 w-fit pl-3 md:pl-6 cursor-pointer' 
            >Introduction to HTML<label className='ml-9 mt-1'>{
              !isActive ? <svg xmlns="http://www.w3.org/2000/svg"
              width="18" height="18" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
             <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
           </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
  <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
</svg>
            }</label> </button>
            { isActive ? 
            <div className='mt-5 mr-9 ml-8 flex flex-col gap-4 text-white'>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2' href="/html/introduction">Hello world</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2'  href="/html/Basic-elements">Basic Elements</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2'  href="/html/Links">Links</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2'  href="/html/List">List</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2' href="/html/Image-tags">Images Tag</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2' href="/html/first-task">First task review</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2' href="/html/tables">Tables</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2' href="/html/forms">Forms</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800 pl-6 py-2' href="/html/audio-and-video">Audio and video tags</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2' href="/html/iframes">iframes</Link> 
            </div> : null}
         </div>

            <button onClick={changeCs} className='hover:border-l-2 
            flex  pr-6 w-11/12 md:py-3 border  text-white  rounded-lg
            hover:bg-white hover:text-blue-800 pl-6 cursor-pointer' 
            href="/">Introduct to CSS <label className='ml-auto mr-2 mt-1'>{
              !csview ? <svg xmlns="http://www.w3.org/2000/svg"
              width="18" height="18" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
             <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
           </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
  <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
</svg>
            }</label></button>
            { csview ? 
            <div className='mt-5 mr-9 ml-8 flex flex-col gap-4 text-white '>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800 pl-6 py-2' href="/css/introduction">Introduction to CSS</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2'  href="/css/selectors">CSS Selectors and Properties</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2' href="/css/css-font">CSS fonts</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2' href="/css/css-colors">colors</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800 pl-6 py-2'  href="/css/model">The Box Model</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2'  href="/css/layout">Layout and Positioning</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2' href="/css/responsiveness">Responsive Web Design</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2' href="/css/transition">CSS Transitions and Animations</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2' href="/css/preprocessors">CSS Preprocessors</Link>
            <Link className='border w-full rounded-lg  hover:bg-white hover:text-blue-800  pl-6 py-2' href="/css/frameworks">CSS Frameworks</Link>
            </div> : null}

            <Link className='hover:border-l-2 
            flex  pr-6 w-11/12 md:py-3 border text-white border-white rounded-lg pl-6
            hover:bg-white hover:text-blue-800 cursor-pointer' 
             href="/resources">Resources</Link>

            <Link className='hover:border-l-2 
            flex  pr-6 w-11/12 md:py-3 border  rounded-lg text-white
             hover:bg-white hover:text-blue-800 pl-6 cursor-pointer'  
             href="/projects">Project List</Link>

            <Link  className='hover:border-l-2 
            flex  pr-6 w-11/12 md:py-3 border rounded-lg text-white
            hover:bg-white hover:text-blue-800 pl-6 cursor-pointer' 
            href="/designs">Design catalogue</Link>

            <Link className='hover:border-l-2 
            flex  pr-6 w-11/12 md:py-3 border  rounded-lg pl-6 text-white
            hover:bg-white hover:text-blue-800 cursor-pointer' 
            
             href="/questions">Ask a question</Link>
        </div> :
         <div className='pt-10 px-5 md:px-10 md:pt-16  bg-blue-900 ' onClick={setToOpen}>
          <span className='cursor-pointer'  >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
            </span>
          </div>}
  </>
  )
}

export default Maindrop