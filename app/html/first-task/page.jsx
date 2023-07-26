import React from 'react'
import Maindrop from "../../../components/Maindrop"
import Image from 'next/image'
import full from "./empt.png"
import withImg from "./outwith.png"
import codeimg from "./withimage.png"
import bio from "./bio.png"
import biores from "./biores.png"

const Overview = () => {
  return (
    <div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
            First task review
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
               In this section, we are going to utilise all what we have learned so far
               in the previous sections and build a simple resume website , containing profile picture, 
               Full name, age, and country of residence. <br />
               Aside that, we would add user skill sets to it, using list tag and 
               finalize it with a paragraph statement.    </div>
             <div className=' md:w-[650px] mt-10 mb-10'>
               <h3>Body tag</h3>
               <p>Firstly, let start by creating our html code, and leave the body tag empty </p>

                <Image src={full} alt='image layout' className='my-10 border'  width={400} height={400}/> 
               <p>The code above will display blank screen on web browser since 
                  there is not content in the body tag
               </p>
             </div>
             <div>
             </div>

             <div className='mt-10'>
                <h3>Then let's add our image with <span className="font-bold">img tag</span> </h3>
                <Image src={codeimg} alt='image layout' className='my-10 border'  width={400} height={400}/> 
                <Image src={withImg} alt='image layout' className='my-10 border'  width={400} height={400}/> 
               
                <p className='md:w-[650px] mt-10 mb-10'>
                  Now let's add the bio details to our resume web page <br />
                  <div>
                     We can basically insert all details inside a box, here let's use div 
                     and place it under the image. <br />
                     Check the code below : 
                  </div>
                </p>

             </div>
             <div className='mt-10'>
                <Image src={bio} alt='image layout' className='my-10 border'  width={400} height={400}/> 
                <Image src={biores} alt='image layout' className='my-10 border'  width={400} height={400}/> 
               
                <p className='md:w-[650px] mt-10 mb-10'>
                  The next thing is to add the skill set <br />
                  <div>
                     We can achieve this by using the list tag, in this situation , <span className="font-bold">ol </span>
                      is preferred <br />
                     Check the code below : 
                  </div>
                </p>
                <p className='md:w-[650px] mt-10 mb-10'>
                Mobile-Friendly Learning: Recognizing the importance of mobile devices in today's digital landscape, the platform is optimized for mobile learning. 
                </p>

             </div>
        </div>
    </div>
  )
}

export default Overview