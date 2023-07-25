import React from 'react'
import Maindrop from '../../../components/Maindrop'
import Image from 'next/image'
import full from './head.png'
import title from './title.png'
import body from './body.png'

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
            
            
           

             <div className='mt-10 md:w-[650px] flex flex-col gap-2'>
             <div><span className='font-bold'>html : </span> The root element that wraps the entire HTML document. </div>              
             <div><span className='font-bold'>head : </span>   Contains meta-information about the document, such as the title, character encoding, links to stylesheets, and scripts.</div>              
             <div><span className='font-bold'>title : </span> Sets the title of the web page, which appears in the browser's title bar or tab.</div>              
             <div><span className='font-bold'>body : </span> : Encloses the visible content of the web page, including text, images, links, headings, paragraphs, etc. </div>              
             <div><span className='font-bold'>p : </span>  Represents a paragraph of text. </div>              
             <div><span className='font-bold'>heading {'<h1>, <h2>, <h3>, <h4>, <h5>, <h6>'} : </span> Heading elements to define headings of different levels (from {'<h1>'}  highest importance to lowest importance  {'<h6>'}  ).</div>              
            
             </div>
                <h2 className='my-5 text-xl font-bold'>Head tag</h2>
             
             <div className='md:w-[650px] my-5 border p-3'>
             The  {'<head>'} element is used to contain meta-information and 
               resources related to the document. It typically appears before the  element and includes elements like 
                {'<title>'},  {'<meta>'},  {'<link>'}, and  {'<script>'}. Here's an example of how the  {'<head>'} element is used in HTML:
             </div>
             <div>
                <Image src={full} alt='image layout'  width={400} height={400}/> 
             </div>
             <div>
             <h2 className='my-5 text-xl font-bold'>Title tag</h2>
             
             <div className='md:w-[650px] my-5 border p-3'>
             In HTML, the {'<title>'} element is used to define the title of the web page. 
               It appears inside the {'<head>'} element and provides a title for the document, 
               which is displayed in the title bar or tab of the web browser. The text specified within the {'<title>'} element is also used as the default name for bookmarking the page.

             </div>
             <div>
                <Image src={title} alt='image layout'  width={400} height={400}/> 
             </div>
             </div>
             <div>
             <h2 className='my-5 text-xl font-bold'>Body tag</h2>
             
             <div className='md:w-[650px] my-5 border p-3'>
             The element is used to define the visible content of a web page. 
             It represents the main content area and contains all the elements that
              are directly visible to users when they visit the web page. The  {'<body>'}  
              element is a child of the
             {'<html>'}  element and is typically placed after the  {'<head>'}  element in the HTML document.
             </div>
             <div>
                <Image src={body} alt='image layout'  width={400} height={400}/> 
             </div>
             </div>
        </div>
    </div>
  )
}

export default Overview