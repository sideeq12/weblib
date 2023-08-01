import React from 'react'
import Maindrop from '@/components/Maindrop'
import uni from './uni.png'
import Image from 'next/image'
import unires from './unires.png'
import el from './el.png'
import elout from './elout.png'
import sel from './cl.png'
import selout from './selout.png'
import id from './id.png'
import group from './group.png'
import groupres from './groupres.png'
import ch from './ch.png'
import chres from './chres.png'
import chi from './chi.png'
import chires from './chires.png'
import adj from './adj.png'
import link from './link.png'
import lcode from './lcode.png'

const Page = () => {
  return (
<div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
               CSS selectors and properties
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
            CSS selectors are patterns used to select and target HTML elements on a web page. They 
            allow you to apply styles and formatting to specific elements or groups of elements based
             on their attributes, properties, or relationships to other elements. CSS selectors play a
              crucial role in styling web pages and making them visually appealing.  </div>
             <div className=' md:w-[650px] my-10'>
                <span className="font-bold text-lg">There are nine commonly used seletor tags : </span> 
                <h2 className='font-semibold'> 1. Universal selectors : </h2>
                  <p>The universal selector selects all elements on the page.
                      It is used to apply styles globally to all  elements.</p>
             </div>
             <div>
                <Image src={uni} alt='image layout code'  width={400} height={400}/> 
             </div>
             <div>
                <Image className='border my-5' src={unires} alt='image layout'  width={400} height={400}/> 
             </div>

             <div className='mt-10'>
             
             <div className=' md:w-[650px] my-10'> 
                <h2 className='font-semibold'> 2. Element selectors : </h2>
                  <p>The element selector selects all instances of a specific HTML element.</p>
             </div>
             <div>
                <Image src={el} alt='image layout'  width={400} height={400}/> 
             </div>
             <div>
                <Image className='border my-5' src={elout} alt='image layout'  width={400} height={400}/> 
             </div>
             <div className=' md:w-[650px] my-10'>
                <h2 className='font-semibold'> 3. class selectors  (.) : </h2>
                  <p>The class selector selects all elements with a specific class attribute. 
                     It is denoted by a period (dot) followed by the class name..</p>
             </div>
             <div>
                <Image src={selout} alt='image layout'  width={400} height={400}/> 
             </div>
             <div>
                <Image className='border my-5' src={sel} alt='image layout'  width={400} height={400}/> 
             </div>
             <div className=' md:w-[650px] my-10'>
                <h2 className='font-semibold'> 4. ID selectors (#): </h2>
                  <p>The ID selector selects a single element with a specific ID attribute.
                      It is denoted by a hash (#) followed by the ID name..</p>
             </div>
             <div>
                <Image src={id} alt='image layout'  width={400} height={400}/> 
             </div>
             <div>
                <Image className='border my-5' src={sel} alt='image layout'  width={400} height={400}/> 
             </div>
             <div className=' md:w-[650px] my-10'>
               <h2 className='font-semibold'> 5. Group selectors : </h2>
                  <p>The grouping selector allows you to apply the same styles to multiple 
                     selectors at once. Separate selectors with commas..</p>
             </div>
             <div>
                <Image src={group} alt='image layout'  width={400} height={400}/> 
             </div>
             <div>
                <Image className='border my-5' src={groupres} alt='image layout'  width={400} height={400}/> 
             </div>
             <div className=' md:w-[650px] my-10'>
                <h2 className='font-semibold'> 6. Descendant selectors (` `) : </h2>
                  <p>The descendant selector selects an element that is a descendant of 
                     another specific element.
                      It is specified by a space between the parent and child elements.</p>
             </div>
             <div>
                <Image src={chres} alt='image layout'  width={400} height={400}/> 
             </div>
             <div>
                <Image className='border my-5' src={ch} alt='image layout'  width={400} height={400}/> 
             </div>
             <div className=' md:w-[650px] my-10'>
               <h2 className='font-semibold'> 7. Child selectors  : </h2>
                  <p>The child selector selects an element that is a direct 
                     child of another element
                     .</p>
             </div>
             <div>
                <Image src={chires} alt='image layout'  width={400} height={400}/> 
             </div>
             <div>
                <Image className='border my-5' src={chi} alt='image layout'  width={400} height={400}/> 
             </div>
             <div className=' md:w-[650px] my-10'>
                <h2 className='font-semibold'> 8. Adjacent sibling selectors : </h2>
                  <p>The adjacent sibling selector selects an element that directly 
                     follows another element and shares the same parent..</p>
             </div>
             <div>
                <Image src={adj} alt='image layout'  width={400} height={400}/> 
             </div>
             <div className=' md:w-[650px] my-10'>
                <h2 className='font-semibold'> 9. Universal selectors : </h2>
                  <p>The general sibling selector selects an element that follows
                      another element and shares the same parent..</p>
             </div>
             <div>
                <Image src={lcode} alt='image layout code'  width={400} height={400}/> 
             </div>
             <div>
                <Image className='border my-5' src={link} alt='image layout'  width={400} height={400}/> 
             </div>
             </div>
        </div>
    </div>
  )
}

export default Page