import React from 'react'
import Maindrop from '@/components/Maindrop'
import Image from 'next/image'
import rflex from './rflex.png'
import rflexout from './rflexout.png'
import code from './code.png'
import dxt from './dxt.png'
import mb from './mobile.png'

const Page = () => {
  return (
<div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
               Responsiveness
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
            Responsiveness in CSS refers to the ability of a web page or application to adapt and adjust 
            its layout and design to different screen sizes, devices, and orientations. With the vast variety
             of devices used to access the internet, from large desktop monitors to small smartphones, creating
             responsive designs is crucial to provide a consistent and user-friendly experience for all users.   </div>
             <div className=' md:w-[650px] my-10'>
               In this section, we are going to use <span className="font-semibold">CSS media queries </span>
               and <span className="font-semibold">CSS Flexbox </span> to explain the responsive design pratices.
             </div>

             <div className='mt-10 md:w-[650px]'>
                <h3>CSS Flex box</h3>
               <p>: Utilize CSS Flexbox to create flexible and 
                  responsive designs that can adjust the placement and sizing of elements based 
                  on the available space.</p>
             <div className='my-5'>
               <Image src={rflex} width={400} height={400} />
             </div>
               <Image src={rflexout} className='border' width={400} height={400} />
             </div>
               <h3>Now let's wrap the content each as box by placing border around them</h3>
               <p> we increase the content, so we can see how it shrinks 
                  once it's larger width of the device</p>
                  <div className='my-5'>
               <Image src={code} width={400} height={400} />
             </div>
             Desktop view
               <Image src={dxt} className='border my-5' width={400} height={400} />
               Mobile view
               <Image src={mb} className='border my-5' width={400} height={400} />
             <div className='mt-10 md:w-[650px]'>
                <h3>CSS media queries</h3>
               <p>Media queries allow you to apply different CSS styles based on the characteristics of the user's 
                  device, such as screen width, height, orientation, resolution, and more. This enables 
                  you to customize the layout and appearance of the page for different screen sizes. For example:</p>
             {/* <div>
               <Image src={} width={400} height={400} />
             </div> */}
               {/* <Image src={} width={400} height={400} /> */}
             </div>
        </div>
    </div>
  )
}

export default Page