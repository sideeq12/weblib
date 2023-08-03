import React from 'react'
import Maindrop from '@/components/Maindrop'
import Image from 'next/image'
import defa from './transdefault.png'
import fad  from './gaf.gif'
import cod from './codeg.png'

const Page = () => {
  return (
<div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
               CSS Transition Properties
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
            Transitions are a way to create smooth and gradual animations between two states of an element. 
            They allow you to define how a property changes over time when the state of an element
             is altered, such as when it is hovered over, clicked, or dynamically modified through JavaScript.  </div>
             <div className=' md:w-[650px] my-10'>
               With transitions, you can specify a starting state and an ending state 
               for a particular CSS property, and the browser will automatically generate the animation 
               between those two states. This creates a more engaging and visually appealing user experience.
             </div>
            <h3 className="font-semibold">Basic illustration</h3>
            <div>
         <Image src={defa} width={400} height={400} />
            </div>

             <div className="my-5 md:w-[650px]">
                  <ul className='flex flex-col gap-3'>
                     <li> <span className="font-bold">Selectors : </span>
                     The CSS selector that targets the element you want to apply the transition to.</li>
                     <li> <span className="font-bold">Property : </span>The CSS property you want to animate during the transition.</li>
                     <li> <span className="font-bold">duration : </span> 
                     The time it takes for the transition to complete,
                      usually specified in seconds (s) or milliseconds (ms).</li>
                     <li> <span className="font-bold">timing-in-function : </span> 
                     Optional. Specifies the acceleration curve for the transition. It controls the speed of
                      the animation at 
                     various points. Common values are linear, ease, ease-in, ease-out, and ease-in-out, among others.</li>
                     <li> <span className="font-bold">delay : </span> Optional. The time to wait before starting the transition 
                     after the property change is triggered. Also specified in seconds (s) or milliseconds (ms)..</li>
                  </ul>
                </div>
                <h3 className="font-semibold mb-5">Example</h3>
                <div>
         <Image src={cod} width={400} height={400} />
            </div>  <div>
         <Image src={fad} width={400} height={400} className='border my-5' />
            </div>
        </div>
    </div>
  )
}

export default Page