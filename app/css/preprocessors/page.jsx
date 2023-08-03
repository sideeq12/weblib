import React from 'react'
import Maindrop from '@/components/Maindrop'
import sass from './sass.png'
import Image from 'next/image'
import styl from './sytlus.png'
import less from './less.png'

const Page = () => {
  return (
<div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
              Prepocessors in CSS
            </h2>
            <div className=' md:w-[650px] my-10 text-sm md:text-base '>
            CSS preprocessors are scripting languages that extend the capabilities of standard CSS. They provide additional features, variables, functions, and organization techniques to make CSS code more maintainable, scalable, and efficient. Preprocessors help developers write CSS in a more dynamic and 
            modular way, which can significantly improve the development workflow and reduce repetitive code. </div>
            
             <div className='mt-10'>
                <h3>Some popular CSS preprocessors include: </h3>
                <p className='md:w-[650px] my-10'>
                  <span className="font-semibold">1. Sass (Syntactically awesome stylesheet) : </span>
                  Sass is one of the most widely used CSS preprocessors. It introduces features like variables, 
                  nesting, mixins, functions, and inheritance, 
                  which enable you to write cleaner and more structured CSS code. Sass files use the .scss extension.
                </p>
                <h4>Example code snippet:</h4>
                <div>
                <Image className='border my-5' src={sass} alt='image layout'  width={400} height={400}/> 
             </div> 
   </div>
     
   <div className='mt-10'>
                <p className='md:w-[650px] my-10'>
                  <span className="font-semibold">Stylus : </span>
                  Stylus is another popular CSS preprocessor known for its minimalistic and expressive
                   syntax. It offers indentation-based syntax (similar to Python) and 
                  includes features like variables, nesting, mixins, and more. Stylus files use the .styl extension.
                </p>
                <h4>Example code snippet:</h4>
                <div>
                <Image className='border my-5' src={styl} alt='image layout'  width={400} height={400}/> 
             </div> 
   </div> 
             <div className='mt-10'>
                <p className='md:w-[650px] my-10'>
                  <span className="font-semibold">Less: </span>
                  Less is similar to Sass in terms of functionality and features. 
                  It also provides variables, nesting, mixins,
                   and more, making it easier to maintain and organize CSS styles. 
                   Less files use the .less extension
                </p>
                <h4>Example code snippet:</h4>
                <div>
                <Image className='border my-5' src={less} alt='image layout'  width={400} height={400}/> 
             </div> 
   </div> 
               <div className='my-5 w-[650px]'>
                  <p>
                  To use CSS preprocessors, you need to compile the preprocessor code into 
                  standard CSS, which browsers can interpret. Most preprocessors provide command-line tools or 
                  integrations with build systems like webpack, Gulp, or Grunt to automate the compilation process
                  </p>
                  </div> 
        </div>
    </div>
  )
}

export default Page