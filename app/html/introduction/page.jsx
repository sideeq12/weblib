import React from 'react'
import Maindrop from '@/components/Maindrop'
import Image from 'next/image'
import Banner from '@/components/banner'
import Code from '@/components/code'
import full from "./helloWorld.png"
import Link from 'next/link'

const Overview = () => {
  return (
    <div className='flex bg-white pb-3 md:pb-10'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
               Hello World!
            </h2>

            <Banner info={ `In this section, you are going to write your first line of code
               and display it on your browser.
                Our purpose in this course is to make the content very 
               friendly and familiar inorder to ease your learning progress by connecting all 
               the fundamental concepts.`  } />

            <Banner info={`HTML (HyperText Markup Language) is the standard markup language used to create web pages. It provides the structure and content of a webpage and uses tags to define elements within the page. The "Hello, World!" section is a simple example used to introduce beginners to HTML coding. It's a tradition in programming to start with this basic example to
             get familiar with the syntax and how things work. Let's dive in!`} />
            <Code>
               <span className='text-orange-300'>{"<html>"} <br/></span> 
               <span className='text-orange-300'>
               <label className='text-stone-800 ' htmlFor=""> .....</label> {"<head>"} <br/></span> 
               <span className='text-orange-300'>
                  <label className='text-stone-800 ' htmlFor=""> ........</label> {"<body>"} <br/></span> 
                  <label className='text-stone-800 ' htmlFor=""> .----.......</label>  {"Hello, World!"} <br />

               <span className='text-orange-300'>
                  <label className='text-stone-800 ' htmlFor=""> ........</label> {"</body>"} <br/></span> 
               <span className='text-orange-300'>
               <label className='text-stone-800 ' htmlFor=""> ......</label> {"</head>"} <br/></span> 
               <span className='text-orange-300'>{"</html>"} <br/></span> 
            </Code>
            <p className='my-3 md:my-6'>Out put on the browser</p>
            <div className=' my-3 md:my-5'>
                <Image className='border border-black' src={full} alt='image layout'  width={400} height={400}/> 
             </div>
            <p className='my-3 md:my-6'>Code explanation</p>
             <ul className='flex flex-col gap-3 w-[700px]'>
               <li> DOCTYPE html: This is the document type declaration and specifies that the document is an HTML5 document.
                It helps the browser to understand the version of HTML being used</li>
                <li> html: This tag indicates the beginning of an HTML document. Everything within the 
                  <span>html</span> tags represents the entire HTML content.</li>
               <li> head: This section contains meta-information about the HTML document, such as the title
                   of the page, character encoding, external CSS files, etc.</li>
               <li>body : : The body tag contains the visible content of the webpage, including text, images, links, etc. 
                  It represents the content that users see on the browser.</li>
             </ul>

             <div className='my-3 md:my-6'>
             The output of this HTML code will be a webpage displaying the text 
             "Hello, World!" in a large font size as the main heading
             </div>
             <Banner info={"This basic example demonstrates the fundamental  structure of an HTML document, including the DOCTYPE declaration, HTML, head, and body elements, and shows how to create headings and paragraphs. From here, you can start building more complex web pages by adding additional HTML elements and styling with CSS."} />
               <div>
                  <Link href="/">prev</Link>
                  <Link href="/">next</Link>
               </div>
        </div>
    </div>
  )
}

export default Overview