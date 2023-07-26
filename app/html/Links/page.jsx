import React from 'react'
import Maindrop from '../../../components/Maindrop'
import Image from 'next/image'
import Banner from "../../../components/banner"
import Code from "../../../components/code"
import mylink from "./link.png"
import mylres from "./linkres.png"
import extern from './external.png'
import exres from './extres.png'
import mail from './mail.png'
import mailre from './mailres.png'
import Link from 'next/link'

const Overview = () => {
  return (
    <div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pb-10 pr-5'>

            <h2 className='text-3xl font-bold'>
               Links in HTML
            </h2>
            <Code>
               <span className='text-orange-300'>{"<a href='url'>"}</span> website name
               <span className='text-orange-300'>{" </a>"}</span> 
            </Code>

             <div className=' md:w-[650px] mt-10 mb-10'>In HTML, you can
              create hyperlinks (links) using the anchor tag {" <a>"}. Links
                allow users to navigate from one web page to another or to different sections within the same page. The anchor tag has an attribute called href, which
                specifies the destination URL or target of the link.
             </div>
             <div>
                <Image src={mylink} alt='image layout'  width={400} height={400}/> 
             </div>
             <div className='my-10'>
                <Image className='border' src={mylres} alt='image layout'  width={400} height={400}/> 
             </div>

             <div className='mt-10'>
                <h3>Key features</h3>
                <p className='md:w-[650px] mt-10 mb-10'>
                  <div><span className='font-bold'>URL</span> :  is the target URL, which can be an external website address (e.g., https://www.example.com) or a relative
                      path to another page within the same website (e.g.,about.html). </div>
                      <div> <span className="font-bold">Link Test</span> is the text that will be displayed as the clickable link.</div>
                </p>
                <div>
                <Image src={extern} alt='image layout'  width={400} height={400}/> 
             </div>
             <div className='my-10'>
                <Image src={exres} className='border' alt='image layout'  width={400} height={400}/> 
             </div>
                
               <span className="font-bold my-10">Link to an email address (using the mailto protocol):</span>
               <div>
                <Image src={mail} alt='image layout'  width={400} height={400}/> 
             </div>
             <div className='my-10'>
                <Image src={mailre} className='border' alt='image layout'  width={400} height={400}/> 
             </div>
                
             </div>

             <Link className='px-10 py-3 my-10 border ' href='/html/List' >Next</Link>
        </div>
    </div>
  )
}

export default Overview