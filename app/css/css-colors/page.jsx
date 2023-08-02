import React from 'react'
import Maindrop from '@/components/Maindrop'
import Image from 'next/image'
import col from './colors.png'
import cool from './cool.png'

const Page = () => {
  return (
<div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5 pb-10'>
            <h2 className='text-3xl font-bold'>
              Css colors
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
            In CSS (Cascading Style Sheets), colors are used to define the appearance of various
             elements on a web page. CSS allows you to specify colors in different formats 
            to achieve the desired visual effect. Here are the common ways to represent 
            colors in CSS:   </div>
            <div className="my-5 md:w-[650px]">
                  <ul className='flex flex-col gap-5'>
                     <li> <span className="font-bold">Named colors : </span> 
                     CSS provides a set of predefined color names that you can use directly without
                      specifying their hex or RGB values. 
                     Some examples of named colors are red, blue, green, yellow, black, white, etc.</li>
                     <li> <span className="font-bold">Hexadecimal Notation : </span> 
                     Colors can be represented using a six-digit hexadecimal value. Each pair of digits represents 
                     the red, green, and blue (RGB) components of the color. For example, 
                     #FF0000 represents pure red, #00FF00 represents pure green, and #0000FF represents pure blue.
                     and have a cursive appearance..</li>
                     <li> <span className="font-bold">RGB Notation : </span> 
                     Colors can also be represented using the rgb() function, specifying the red, green,
                      and blue components individually. Each component ranges from 0 to 255. For example, 
                      rgb(255, 0, 0) represents pure red, rgb(0, 255, 0)
                      represents pure green, and rgb(0, 0, 255) represents pure blue..</li>
                     <li> <span className="font-bold">RGBA Notation : </span> 
                     Similar to RGB, you can use the rgba() function to represent colors with an additional
                      alpha (transparency) component. The alpha value ranges from 0 (fully transparent) to 1
                       (fully opaque). 
                     For example, rgba(255, 0, 0, 0.5) represents semi-transparent red..</li>
                     <li> <span className="font-bold">HSL Notation : </span> 
                     HSL stands for Hue, Saturation, and Lightness. It provides a more intuitive way to
                      describe colors. The hsl() function allows you to specify the hue (0 to 360), saturation
                       (0% to 100%), and lightness
                      (0% to 100%) components. For example, hsl(0, 100%, 50%) represents pure red.</li>
                      <li> <span className="font-bold">HSLA Notation : </span> 
                      Similar to HSL, you can use the hsla() function to represent colors with an additional alpha (transparency) component. The alpha value ranges from 0 (fully transparent)
                       to 1 (fully opaque). For example, hsla(0, 100%, 50%, 0.5) represents semi-transparent red.</li>
                    
                  </ul>
                </div>
                <div className='my-5'>
               <Image src={col} className='border' width={400} height={400} alt='info' />
             </div>
             <div className='my-5'>
               <Image src={cool} className='border' width={400} height={400} alt='info' />
             </div>

             <button className='border py-3 px-8'>Next</button>

        </div>
    </div>
  )
}

export default Page