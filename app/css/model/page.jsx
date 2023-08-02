import React from 'react'
import Maindrop from '@/components/Maindrop'

const Page = () => {
  return (
<div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
               Box Model
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
            The Box Model is a fundamental concept in CSS (Cascading Style Sheets) that describes 
            how elements are laid out and how their dimensions are calculated. In the Box Model, 
            every element on a web page is treated as a rectangular box, and each box has four components:   </div>
             <div className=' md:w-[650px] my-10'>
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
             </div>
             <div>
                {/* <Image src={full} alt='image layout'  width={400} height={400}/>  */}
             </div>

             <div className='mt-10'>
                <h3>Result on the browser</h3>
                <div>
                {/* <Image className='border' src={res} alt='image layout'  width={400} height={400}/>  */}
             </div>
                <p className='md:w-[650px] my-10'>
                In this example, the controls attribute adds basic playback controls 
                (play, pause, volume, etc.) to the audio player. The <span className="font-bold">source </span>
                element is used to specify multiple audio file formats to provide
                 compatibility across different browsers. The browser will automatically
                 choose the supported format based on the browser's capabilities.
                </p>

                <h3 className='my-5'>The video tag </h3>
                <p className='md:w-[650px] my-10'>
                The <span className="font-bold">video </span> tag is used to embed video content, such as movies, video clips, 
                  or video presentations, into a web page. It supports various video file formats, including MP4,
                   WebM, and Ogg. Here's an example of how to use the <span className="font-bold">video </span> tag: 
                </p>
                <div>
                {/* <Image src={fim} alt='image layout'  width={400} height={400}/>  */}
             </div>
             <h3>Result on the browser</h3>
                <div>
                {/* <Image className='border' src={vres} alt='image layout'  width={400} height={400}/>  */}
             </div>
             <p className="my-10 w-[650px]">
             Similar to the <span className="font-bold">audio </span> tag, the controls attribute adds playback controls to the video player. The width and height attributes define the dimensions of the video player.

Both the <span className="font-bold">audio </span> and <span className="font-bold">video </span> tags can have multiple <span className="font-bold">source </span> elements, allowing you to provide different file formats 
to improve cross-browser compatibility.
 <br /> The browser will choose the first supported format from the list.

If the browser does not support the <span className="font-bold">audio </span> or <span className="font-bold">video </span>tags or any of the specified formats, it will display the content inside the tags' fallback content. In the examples above, the fallback content is the message "Your browser does not support the audio/video element." This allows you to provide alternative content or instructions for users 
   whose browsers don't support the audio or video features.
             </p>
             <h3>When the correct video name and extension available: </h3>
                <div>
                {/* <Image className='border' src={correct} alt='image layout'  width={400} height={400}/>  */}
             </div>

             </div>
        </div>
    </div>
  )
}

export default Page