import React from 'react'
import Maindrop from '../../../components/Maindrop'
import Image from 'next/image'
// import full from "./web.png"

const Overview = () => {
  return (
    <div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
               Basic elements in HTML
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
               There re several elements in writing html code, where some are self closing tags, and others are not.
               In this chapter we are going to discuss , <code>Head</code>, <code>body</code> , 
               <code>div</code>, <code>p</code> <code>and heading tags</code> .  Each element is represented by a tag, and 
               tags are enclosed within angle brackets. </div>
            
            
             
             <div>
                {/* <Image src={full} alt='image layout'  width={400} height={400}/>  */}
             </div>

             <div className='mt-10'>
               

             </div>
        </div>
    </div>
  )
}

export default Overview