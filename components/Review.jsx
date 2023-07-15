import React from 'react'
import Image from 'next/image'
import teach from  "./code.jpg"

const Review = () => {
  return (
    <div className='px-6 flex flex-col md:flex-row md:border-t-2 md:py-20 md:px-20'>
        <Image src={teach} width={400} height={400} alt="review "/>
        <p className='w-fit mt-5  md:w-2/5 md:ml-14 pt-4 md:pt-20'>
            <h2 className='font-bold text-3xl mb-10'>Roadmap for learning</h2>
            <ul>
                <li className='mb-3'><span className='font-bold'>Learn HTML</span>: Understand the structure and 
                    semantics of HTML to create the basic building blocks of web pages.</li>
                <li className='mb-3'>
                <span className='font-bold'>Master CSS</span>: Dive into CSS to style and enhance the visual appearance
                 of your web pages, including layout, typography, and colors.
                </li>
                <li className='mb-3'> <span className='font-bold'>Embrace JavaScript</span>
                : Explore the power of
                 JavaScript to add interactivity and dynamic functionality to your web pages.
                </li>
                <li className='mb-3'>
                <span className='font-bold'>Practice responsive design</span>: Ensure your websites adapt seamlessly to different devices and screen 
                sizes, using responsive design techniques and CSS media queries.
                </li>            </ul>
        </p>
    </div>
  )
}

export default Review