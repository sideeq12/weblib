import React from 'react'
import Maindrop from "../../../components/Maindrop"
import Image from 'next/image'
import full from "./framecode.png"
import prshow from "./prshow.png"
import fulle from "./frames.png"

const Overview = () => {
  return (
    <div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
               Iframes in HTML 
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
            In HTML, an iframe (short for "inline frame") is used to embed 
            another HTML document or web page within the current web page. 
            It allows you to display content from an external source or a different
             page on your website without having to navigate away from the current page.
              This is often used to integrate third-party content, such as embedded videos,
             maps, or social media widgets, into a web page.   </div>
             <div className=' md:w-[650px] my-10'>
             </div>
             <p className='mb-10'>The basic syntax of an iframe is as follows:</p>
             <div>
                <Image src={full} alt='image layout'  width={400} height={400}/> 
             </div>

             <div className='mt-10'>
                <p className='md:w-[650px] mt-10 mb-10'>
                The src attribute specifies the URL of the external page or content that you want to embed. 
                Here's an example of embedding a YouTube video using an iframe:
                </p>
                <div>
                <Image src={fulle} alt='image layout'  width={400} height={400}/> 
             </div>
                
                <p className='md:w-[650px] mt-10 mb-10'>
                Mobile-Friendly Learning: Recognizing the importance of mobile devices in today's digital landscape, the platform is optimized for mobile learning. 
                </p>

             </div>
        </div>
    </div>
  )
}

export default Overview