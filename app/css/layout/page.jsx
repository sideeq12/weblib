import React from 'react'
import Maindrop from '@/components/Maindrop'
import Image from 'next/image'
import flexcode from './flexcode.png'
import ot from './ot.png'

const Page = () => {
  return (
<div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
             CSS layout and Positioning
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
            CSS layout and positioning are essential concepts for controlling the arrangement 
            and placement of elements on a web page. They determine how elements are displayed 
            in relation to each other and to the viewport. Proper layout and positioning are crucial 
            for creating responsive, well-organized, and visually appealing web designs. There are 
            several techniques and properties in CSS that help achieve different layouts and positioning 
            effects  </div>

            <div className="my-5 md:w-[650px]">
                  <ul className='flex flex-col gap-3'>
                     <li> <span className="font-bold"> Normal Flow layout : </span>   In the normal flow layout,
                      elements are arranged in the order they appear in the HTML document. Block-level elements 
                      stack on top of each other, and inline-level elements flow from left to right.
                      This is the default behavior if you don't apply any positioning or layout properties</li>
                     <li> <span className="font-bold">Flexbox Layout : </span>
                     CSS Flexbox is a powerful layout model that provides a way to distribute and align 
                     elements along a single axis or both axes. It's useful for
                      creating responsive designs and controlling the order and size of elements within a container.</li>
                     <li> <span className="font-bold">Grid Layout : </span> 
                     CSS Grid is another layout model that allows you to create two-dimensional grid-based layouts. 
                     It enables you to position elements both horizontally and vertically in a highly flexible way..</li>
                     <li> <span className="font-bold">Float : </span> The float property allows elements to be taken out of the normal flow and aligned to the left or right of their container. 
                     This was commonly used for creating multi-column layouts before Flexbox and CSS Grid became popular..</li>
                  </ul>
                </div>
               <div className='md:w-[650px]'>
                  <h3>Let's master css flexbox and learn the steps involves in using it</h3>
                  <p>
                  Flexbox is particularly useful for creating complex layouts with
                   evenly spaced content, aligning elements, and handling different screen sizes
                  </p>
                  <ul className='flex flex-col gap-3'>
                     <li> <span className="font-bold"> Normal Flow layout : </span> The parent element containing one 
                     or more flex items. To create a flex container, you apply the display: flex; or
                      display: inline-flex; property to the container element. The flex value creates
                      a block-level flex container, while inline-flex creates an inline-level flex container.</li>
                     <li> <span className="font-bold">Flex items : </span> The child elements within the flex container.
                      They are the elements that will be flexed and aligned. By default, flex 
                     items are laid out in the direction of the main axis (horizontal for row and vertical for column).</li>
                     <li> <span className="font-bold">Main Axis : </span> 
                     The primary axis along which flex items are distributed inside the flex container. 
                     It can be either horizontal (row) or vertical (column)
                      based on the flex container's flex-direction.</li>
                     <li> <span className="font-bold">Cross axis : </span> 
                     The perpendicular axis to the main axis. If the main axis is horizontal, 
                     the cross axis is vertical, and vice versa</li>
                     <li> <span className="font-bold">Flex Direction : </span> 
                     The flex-direction property determines the direction in which flex items are laid 
                     out inside the container. It can be set to row (default), row-reverse, column, or column-reverse.</li>
                      <li> <span className="font-bold">Align items : </span> 
                      The align-items property controls how flex items are aligned along the cross axis. It helps
                       distribute the free space along the perpendicular axis.</li>
                     <li> <span className="font-bold">Flex wrapping : </span>
                     The flex-wrap property allows flex items to wrap to the next line or column 
                     if they don't fit in the flex container's width or height.</li>
                  </ul>
                  </div> 
                  <Image src={flexcode} className='my-5' width={400} height={400} />
                  <Image src={ot} width={400} className='my-5' height={400} />
        </div>
    </div>
  )
}

export default Page