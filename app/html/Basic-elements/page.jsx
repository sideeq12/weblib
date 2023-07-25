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

             <div className='mt-10 md:w-[650px] flex flex-col gap-2'>
             <div><span className='font-bold'>html : </span> The root element that wraps the entire HTML document. </div>              
             <div><span className='font-bold'>head : </span>   Contains meta-information about the document, such as the title, character encoding, links to stylesheets, and scripts.</div>              
             <div><span className='font-bold'>title : </span> Sets the title of the web page, which appears in the browser's title bar or tab.</div>              
             <div><span className='font-bold'>body : </span> : Encloses the visible content of the web page, including text, images, links, headings, paragraphs, etc. </div>              
             <div><span className='font-bold'>p : </span>  Represents a paragraph of text. </div>              
             <div><span className='font-bold'>heading {'<h1>, <h2>, <h3>, <h4>, <h5>, <h6>'} : </span> Heading elements to define headings of different levels (from {'<h1>'}  highest importance to lowest importance  {'<h6>'}  ).</div>              
            
             </div>
        </div>
    </div>
  )
}

export default Overview