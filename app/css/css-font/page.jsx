import React from 'react'
import Maindrop from '@/components/Maindrop'

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
                {/* <Image src={fim} alt='image layout'  width={400} height={400}/>  */}
             </div>
             <div>
                {/* <Image src={fim} className='border' alt='image layout'  width={400} height={400}/>  */}
             </div>

             <p className='md:my-10'>
                  <span className="font-semibold">font-size : </span>
                  It sets the size of the text. You can specify the size in pixels (px), 
                  em, rem, percentages, etc. For example:
                </p>
                <div className='my-10'>
                {/* <Image src={fim} alt='image layout'  width={400} height={400}/>  */}
             </div>
             <div>
                {/* <Image src={fim} className='border' alt='image layout'  width={400} height={400}/>  */}
             </div>

             <p className='md:my-10'>
                  <span className="font-semibold">font-weight : </span>
                  This property determines the thickness or boldness of the text. The common values are normal, 
                  bold, bolder, lighter, or numeric values like 400, 700, etc. For example:
                </p>
                <div className='my-10'>
                {/* <Image src={fim} alt='image layout'  width={400} height={400}/>  */}
             </div>
             <div>
                {/* <Image src={fim} className='border' alt='image layout'  width={400} height={400}/>  */}
             </div>


             <p className='md:my-10'>
                  <span className="font-semibold">font-family : </span>This property is used to specify the font
                   family or typeface for the text. You can define multiple font families 
                  separated by commas, and the browser will use the first available font in the list. For example:
                </p>
                <div className='my-10'>
                {/* <Image src={fim} alt='image layout'  width={400} height={400}/>  */}
             </div>
             <div>
                {/* <Image src={fim} className='border' alt='image layout'  width={400} height={400}/>  */}
             </div>

             <p className='md:my-10'>
                  <span className="font-semibold">font-family : </span>This property is used to specify the font
                   family or typeface for the text. You can define multiple font families 
                  separated by commas, and the browser will use the first available font in the list. For example:
                </p>
                <div className='my-10'>
                {/* <Image src={fim} alt='image layout'  width={400} height={400}/>  */}
             </div>
             <div>
                {/* <Image src={fim} className='border' alt='image layout'  width={400} height={400}/>  */}
             </div>
            
            

             </div>
        </div>
    </div>
  )
}

export default Page