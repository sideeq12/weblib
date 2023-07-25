"use client";
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';


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
         <div className='w-9/12 bg-slate-100 text-sm pr-3 md:pr-10 z-10 pos  md:w-3/12 
         flex flex-col gap-2 pl-3 md:pl-6 pt-16 pb-10'>
            <span onClick={(open)=>setOpen(!open)} className='cursor-pointer ml-auto mr-16'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
            </span>
            <div className='mt-20 ml-10'>Logo</div>
            <Link className='hover:border-l-2 
            flex  pr-6 w-11/12 md:py-3 border border-slate-400 rounded-lg
             hover:border-black pl-6 cursor-pointer' 
             href="/overview">Overview</Link>

         <div className=''>
         <button onClick={changeView}
            className='hover:border-l-2 
            flex pr-3 md:pr-6 py-1 text-sm md:py-3 border border-slate-400 rounded-lg
             hover:border-black w-fit pl-3 md:pl-6 cursor-pointer' 
            >Introduction to HTML<label className='ml-9 mt-1'>{
              !isActive ? <svg xmlns="http://www.w3.org/2000/svg"
              width="18" height="18" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
             <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
           </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
  <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
</svg>
            }</label> </button>
            { isActive ? 
            <div className='mt-5 mr-9 ml-8 flex flex-col gap-4'>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2' href="/html/introduction">Hello world</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2'  href="/html/Basic-elements">Basic Elements</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2'  href="/Links">Links</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2'  href="/List">List</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2' href="/Image-tags">Images Tag</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2' href="/first-task">First task review</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2' href="/tables">Tables</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2' href="/forms">Forms</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2' href="/audio-and-video">Audio and video tags</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2' href="/iframes">Iframes</Link> 
            </div> : null}
         </div>

            <button onClick={changeCs} className='hover:border-l-2 
            flex  pr-6 w-11/12 md:py-3 border border-slate-400 rounded-lg
             hover:border-black pl-6 cursor-pointer' 
            href="/">Introduct to CSS <label className='ml-auto mr-2 mt-1'>{
              !csview ? <svg xmlns="http://www.w3.org/2000/svg"
              width="18" height="18" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
             <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
           </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
  <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
</svg>
            }</label></button>
            { csview ? 
            <div className='mt-5 mr-9 ml-8 flex flex-col gap-4'>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2' href="/">Html tags</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2'  href="/">Html tags</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2'  href="/">Html tags</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2'  href="/">Html tags</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2' href="/">Html tags</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2' href="/">Html tags</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2' href="/">Html tags</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2' href="/">Html tags</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2' href="/">Html tags</Link>
            <Link className='border w-full rounded-lg border-slate-400  pl-6 py-2' href="/">Html tags</Link>
            </div> : null}

            <Link className='hover:border-l-2 
            flex  pr-6 w-11/12 md:py-3 border border-slate-400 rounded-lg
             hover:border-black pl-6 cursor-pointer' 
             href="/">Resources</Link>

            <Link className='hover:border-l-2 
            flex  pr-6 w-11/12 md:py-3 border border-slate-400 rounded-lg
             hover:border-black pl-6 cursor-pointer'  
             href="/">Project List</Link>

            <Link  className='hover:border-l-2 
            flex  pr-6 w-11/12 md:py-3 border border-slate-400 rounded-lg
             hover:border-black pl-6 cursor-pointer' 
            href="/">Design catalogue</Link>

            <Link className='hover:border-l-2 
            flex  pr-6 w-11/12 md:py-3 border border-slate-400 rounded-lg
             hover:border-black pl-6 cursor-pointer' 
             href="/">Ask a question</Link>
        </div> :
         <div className='pt-10 px-5 md:px-10 md:pt-16  bg-slate-100 ' onClick={setToOpen}>
          <span className='cursor-pointer'  >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
            </span>
          </div>}
  </>
  )
}

export default Maindrop