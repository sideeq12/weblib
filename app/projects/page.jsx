import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Maindrop from '@/components/Maindrop'
import logi from './login.png'
import  simp from './simple.png'
import teach from './teacher.png'
import test from './test.png'

function Projects() {
    let loginUrl = 'https://www.behance.net/gallery/173924583/Fitness-Web-App-Login-and-Register/modules/981976623'
    let simplelog = 'https://www.behance.net/gallery/171258351/Login-and-Sgin-up-Page/modules/966430495'
    let teacherland = 'https://www.behance.net/gallery/176236823/English-Teachers-Landing-Page/modules/995347235'
  let testmo = 'https://www.behance.net/gallery/128945099/TESTIMONIAL-PAGE/modules/757290519'
  
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

         <div className="my-10">
            <h2 className='mb-4'>Testimonial Card Design</h2>
            <Image src={test} width={400} height={400} />
            <Link className='font-semibold my-5 underline text-blue-500' href={testmo}>Check design</Link>
             </div>
         <div className="my-10">
            <h2 className='mb-4'>Fitness Login</h2>
            <Image src={logi} width={400} height={400} />
            <Link className='font-semibold my-5 underline text-blue-500' href={loginUrl}>Check design</Link>
             </div>

             <div className="my-10">
            <h2 className='mb-4'>Neat Login</h2>
            <Image src={simp} width={400} height={400} />
            <Link className='font-semibold my-5 underline text-blue-500' href={simplelog}>Check design</Link>
             </div>

             <div className="my-10">
            <h2 className='mb-4'>Teaching landing page</h2>
            <Image src={teach} width={400} height={400} />
            <Link className='font-semibold my-5 underline text-blue-500' href={teacherland}>Check design</Link>
             </div>

          </div>

       <Link className='border py-3 px-8' href='https://www.behance.net'>more</Link>

  </div>
</div>
 
  )
}

export default Projects