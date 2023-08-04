import React from 'react'
import Maindrop from '../../components/Maindrop'

function Resources() {
  return (<div className='flex bg-white'>
  <Maindrop />
  <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5 pb-10'>
      <h2 className='text-3xl font-bold'>
        Resources
      </h2>
      <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
      In CSS (Cascading Style Sheets), colors are used to define the appearance of various
       elements on a web page. CSS allows you to specify colors in different formats 
      to achieve the desired visual effect. Here are the common ways to represent 
      colors in CSS:   </div>
      <div className="my-5 md:w-[650px]">
            <ul className='flex flex-col gap-5'>
               <li> <span className="font-bold">MDN Web Docs (Mozilla Developer Networks) : </span>
               This is a comprehensive resource covering HTML, CSS, JavaScript, and other web 
               technologies. It's one of the most authoritative references available. 
               </li>
               <li> <span className="font-bold">Designmodo : </span> 
               This site offers design and coding tutorials, UI kits, and other
                resources to help you learn web design and front-end development.</li>
               <li> <span className="font-bold">FreeCodeCamp : </span> 
               FreeCodeCamp is a nonprofit organization that provides a free and interactive curriculum 
               to learn web development, including responsive web design, front-end libraries, and more.</li>
               <li> <span className="font-bold">RGBA Notation : </span> 
               Similar to RGB, you can use the rgba() function to represent colors with an additional
                alpha (transparency) component. The alpha value ranges from 0 (fully transparent) to 1
                 (fully opaque). 
               For example, rgba(255, 0, 0, 0.5) represents semi-transparent red..</li>
               <li> <span className="font-bold">React Official Documentation : </span> 
               The React.js official documentation is one of the best places to start learning React. 
               It provides a comprehensive guide to the library, along with examples and explanations..</li>
                <li> <span className="font-bold">React Fudamental on Egghead.io: </span> 
                Egghead.io offers an in-depth and well-structured course on React.js fundamentals,
                 taught by industry experts like Kent C. Dodds..</li>
              
            </ul>
          </div>

       <button className='border py-3 px-8'>Next</button>

  </div>
</div>
  )
}

export default Resources