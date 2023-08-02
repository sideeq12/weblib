import React from 'react'
import Maindrop from '@/components/Maindrop'
import Image from 'next/image'
import familyout from './familyout.png'
import family from './family.png'
import size from './size.png'
import sizeout from './sizeout.png'
import weight from './weight.png'
import weout from './weighout.png'
import styl from './styleout.png'
import st from './style.png'
import txt from './text.png'
import textcode from './textcode.png'


const Page = () => {
  return (
<div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
               CSS Font Properties
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>In CSS (Cascading Style Sheets), fonts 
            refer to the different typefaces used for displaying text on webpages. CSS provides various 
            font-related properties that allow you to control 
            the appearance of text, including font family, size, weight, style, and more.  </div>
        

             <div className='md:my-10 md:w-[650px] '>
                <h3>Here are some common CSS font properties:</h3>
                <div>
             </div>
                <p className='md:my-10'>
                  <span className="font-semibold">font-family : </span>This property is used to specify the font
                   family or typeface for the text. You can define multiple font families 
                  separated by commas, and the browser will use the first available font in the list. For example:
                </p>
                <div className='my-10'>
                <Image src={family} alt='image layout'  width={400} height={400}/> 
             </div>
             <div>
                <Image src={familyout} className='border' alt='image layout'  width={400} height={400}/> 
             </div>

             <p className='md:my-10'>
                  <span className="font-semibold">font-size : </span>
                  It sets the size of the text. You can specify the size in pixels (px), 
                  em, rem, percentages, etc. For example:
                </p>
                <div className='my-10'>
                <Image src={size} alt='image layout'  width={400} height={400}/> 
             </div>
             <div>
                <Image src={sizeout} className='border' alt='image layout'  width={400} height={400}/> 
             </div>

             <p className='md:my-10'>
                  <span className="font-semibold">font-weight : </span>
                  This property determines the thickness or boldness of the text. The common values are normal, 
                  bold, bolder, lighter, or numeric values like 400, 700, etc. For example:
                </p>
                <div className='my-10'>
                <Image src={weight} alt='image layout'  width={400} height={400}/> 
             </div>
             <div>
                <Image src={weout} className='border' alt='image layout'  width={400} height={400}/> 
             </div>


             <p className='md:my-10'>
                  <span className="font-semibold">font-style : </span>
                  The font-style property is used to define the style of the text. It allows you to control 
                  whether the text is displayed in a normal (upright), italic, 
                  or oblique style. The font-style property accepts the following values:
                </p>
                <div className="my-5">
                  <ul>
                     <li> <span className="font-bold">normal : </span>  This is the default value and displays the text in a normal (upright) style.</li>
                     <li> <span className="font-bold">italic : </span>  This value displays the text in an italic style. Italic fonts are typically slanted 
                     and have a cursive appearance..</li>
                     <li> <span className="font-bold">oblique : </span> This value displays the text in an oblique style. It's similar to italic but doesn't necessarily follow the cursive design of an italic font. Instead, it simply
                      slants the characters without any special design changes</li>
                  </ul>
                </div>
                <div className='my-10'>
                <Image src={st} alt='image layout'  width={400} height={400}/> 
             </div>
             <div>
                <Image src={styl} className='border' alt='image layout'  width={400} height={400}/> 
             </div>
             <p className='md:my-10'>
                  <span className="font-semibold">Text-decoration : </span>
                  This property is used to add visual effects to text. It allows you to control underlining, overlining, 
                  line-through, and other text decorations. The text-decoration property accepts the following values:
                </p>
                <div className="my-5">
                  <ul>
                     <li> <span className="font-bold">none : </span> This is the default value and removes any text decoration from the text</li>
                     <li> <span className="font-bold">underline : </span> 
                     This value adds a line underneath the text.
                     and have a cursive appearance..</li>
                     <li> <span className="font-bold">overline : </span> 
                     This value adds a line above the text.</li>
                     <li> <span className="font-bold">line-through : </span> 
                     : This value adds a line through the middle of the text, striking it out.</li>
                     <li> <span className="font-bold">overline : </span> 
                     This value causes the text to blink. However, this value is not supported in modern browsers
                      and is generally considered a deprecated or non-standard feature.</li>
                  </ul>
                </div>
                <div className='my-10'>
                <Image src={textcode} alt='image layout'  width={400} height={400}/> 
             </div>
             <div>
                <Image src={txt} className='border' alt='image layout'  width={400} height={400}/> 
             </div>

            
                
            

             </div>
        </div>
    </div>
  )
}

export default Page