import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Maindrop from '@/components/Maindrop'

function Projects() {
    let loginUrl = 'https://www.behance.net/gallery/173924583/Fitness-Web-App-Login-and-Register/modules/981976623'
    let simplelog = 'https://www.behance.net/gallery/171258351/Login-and-Sgin-up-Page/modules/966430495'
  return (<div className='flex bg-white'>
  <Maindrop />
  <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5 pb-10'>
      <h2 className='text-3xl font-bold'>
        Projects
      </h2>
      <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
        There's no better way to master a skill than continuous practice approach </div>
      <div className="my-5 md:w-[650px]">
         kindly go through the following simple design and implement them with the skills learned in 
         the previous chapters

         <div className="my-5">
            <h2>Fitness Login</h2>
            <Image src={loginUrl} width={400} height={400} />
         </div>
          </div>

       <button className='border py-3 px-8'>Next</button>

  </div>
</div>
 
  )
}

export default Projects