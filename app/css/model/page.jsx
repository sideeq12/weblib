import React from 'react'
import Maindrop from '@/components/Maindrop'
import Image from 'next/image'
import borde from './bord.png'
import border from './border.png'
import pad from './pad.png'
import padc from './padc.png'
import box from './boxes.png'
import bo from './boxres.png'
import mar from './mar.png'
import margi from './margin.png'

const Page = () => {
  return (
<div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
               Box Model
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
            The Box Model is a fundamental concept in CSS (Cascading Style Sheets) that describes 
            how elements are laid out and how their dimensions are calculated. In the Box Model, 
            every element on a web page is treated as a rectangular box, and each box has four components:   </div>
             <div className=' md:w-[650px] my-10'>
             <div className="my-5">
                  <ul className='flex flex-col gap-3'>
                     <li> <span className="font-bold">Content : </span>  This is the innermost part of the box and represents the actual 
                     content of the element, such as text, images, or other media.</li>
                     <li> <span className="font-bold">Padding : </span>The padding is a transparent area surrounding the content, creating 
                     space between the content and the element's border.
                     and have a cursive appearance..</li>
                     <li> <span className="font-bold">Padding : </span> 
                     The border is a line that surrounds the padding and content, creating a visible boundary for
                      the box. It can have different styles, thicknesses, and colors..</li>
                     <li> <span className="font-bold">line-through : </span> 
                     : This value adds a line through the middle of the text, striking it out.</li>
                     <li> <span className="font-bold">Margin : </span> 
                     The margin is a transparent area surrounding the border, creating space between the box
                      and other elements on the page. It provides spacing between elements.</li>
                  </ul>
                </div>
             </div>
            

             <div className='mt-10'>
                <h3>Let's take each one of the components and use it as example, starting border</h3>
                <p>
                  lets wrap our div element with border red with 1px in size 

                <Image className='border mt-5' src={border} alt='image layout'  width={400} height={400}/> 
                <Image className='border my-5' src={borde} alt='image layout'  width={400} height={400}/> 
               
                </p>
            
                <p className='md:w-[650px]'>
                  next on the list is to implement the padding : The space between a box and its inner content
                  in this case,  space between our text 'first box' and the border.

                <Image className='border mt-5' src={padc} alt='image layout'  width={400} height={400}/> 
                <Image className='border my-5' src={pad} alt='image layout'  width={400} height={400}/> 
               
                </p>
                <p className='md:w-[650px]'>
                  To implement margin , which is the space outside two box element, 
                  let's firstly duplicate our box and place them beside each other, using flex box, (don't 
                  about flex box at the moment, we would explain in the next chapter)

                <Image className='border mt-5' src={box} alt='image layout'  width={400} height={400}/> 
                <Image className='border my-5' src={bo} alt='image layout'  width={400} height={400}/> 
               
                </p>
                <p className='md:w-[650px]'>
                  finally, we can now put space in between by adding margin to either first block, second block,
                  or both. In our case, we are going to add margin to only first  box

                <Image className='border mt-5' src={margi} alt='image layout'  width={400} height={400}/> 
                <Image className='border my-5' src={mar} alt='image layout'  width={400} height={400}/> 
               
                </p>
             

             </div>
        </div>
    </div>
  )
}

export default Page