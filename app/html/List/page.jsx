import React from 'react'
import Maindrop from '../../../components/Maindrop'
import Image from 'next/image'
import full from "./ul.png"
import fullist from "./ulist.png"
import order from "./ol.png"
import olist from "./order.png"
import dlist from "./dlist.png"
import dd from "./dd.png"

const Overview = () => {
  return (
    <div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
               List in HTML 
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
                HTML (Hypertext Markup Language) is a markup
             language used to create the structure of web pages, and it consists of a set of predefined
                elements that define the different parts and content of a web page.     </div>

                <p>However, there are several list-related elements in HTML 
                  that you can use to create lists:</p>
             <div className=' md:w-[650px] my-10'>
               <div><span className="font-bold">ul </span> : Represents an unordered list, where list items are preceded by bullets or other marker symbols. 
                  Each item is wrapped in an <span className="font-bold">li</span> (list item) element.</div>
             </div>
             <p className='mb-10'>Get enough skills to create a responsive design below</p>
             <div>
                <Image src={full} alt='image layout'  width={400} height={400}/> 
             </div>
              <div className="my-10">Result on browser</div>
              <div>
                <Image className='border' src={fullist} alt='image layout'  width={400} height={400}/> 
             </div>

             <div className='mt-10'>
                <p className='md:w-[650px] mt-10 mb-10'>
                <span className="font-bold">ol </span>: Represents an ordered list, where list items are automatically numbered with
                 numbers or letters. Again, each item is wrapped in  <span className="font-bold">li</span> (list item) element
                </p>
                <div>
                <Image src={order} alt='image layout'  width={400} height={400}/> 
             </div>
              <div className="my-10">Result on browser</div>
              <div>
                <Image className='border' src={olist} alt='image layout'  width={400} height={400}/> 
             </div>

             <p className='md:w-[650px] mt-10 mb-10'>
                <span className="font-bold">dl </span>:  Represents a description list,
                 which consists of a series of term-definition pairs. The terms are represented by <span className="font-bold">dt</span> (description term) 
                  elements, and the definitions are represented by <span className="font-bold">dd</span> (description details) elements. <span className="font-bold">li</span> (list item) element
                </p>
                <div>
                <Image src={dlist} alt='image layout'  width={400} height={400}/> 
             </div>
              <div className="my-10">Result on browser</div>
              <div>
                <Image className='border' src={dd} alt='image layout'  width={400} height={400}/> 
             </div>

             <div className="my-5 md:w-[700px]">Remember that HTML elements are used to structure the content of a web page, so these list elements help you 
             organize information in a meaningful and hierarchical manner.</div>


             </div>
        </div>
    </div>
  )
}

export default Overview