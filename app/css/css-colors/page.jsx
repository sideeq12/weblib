import React from 'react'
import Maindrop from '@/components/Maindrop'

const Page = () => {
  return (
<div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
              Css colors
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
            In CSS (Cascading Style Sheets), colors are used to define the appearance of various
             elements on a web page. CSS allows you to specify colors in different formats 
            to achieve the desired visual effect. Here are the common ways to represent 
            colors in CSS:   </div>
            <div className="my-5">
                  <ul>
                     <li> <span className="font-bold">Named colors : </span> 
                     CSS provides a set of predefined color names that you can use directly without
                      specifying their hex or RGB values. 
                     Some examples of named colors are red, blue, green, yellow, black, white, etc.</li>
                     <li> <span className="font-bold">Hexadecimal Notation : </span> 
                     Colors can be represented using a six-digit hexadecimal value. Each pair of digits represents 
                     the red, green, and blue (RGB) components of the color. For example, 
                     #FF0000 represents pure red, #00FF00 represents pure green, and #0000FF represents pure blue.
                     and have a cursive appearance..</li>
                     <li> <span className="font-bold">RGB Notation : </span> 
                     Colors can also be represented using the rgb() function, specifying the red, green,
                      and blue components individually. Each component ranges from 0 to 255. For example, 
                      rgb(255, 0, 0) represents pure red, rgb(0, 255, 0)
                      represents pure green, and rgb(0, 0, 255) represents pure blue..</li>
                     <li> <span className="font-bold">RGBA Notation : </span> 
                     Similar to RGB, you can use the rgba() function to represent colors with an additional
                      alpha (transparency) component. The alpha value ranges from 0 (fully transparent) to 1
                       (fully opaque). 
                     For example, rgba(255, 0, 0, 0.5) represents semi-transparent red..</li>
                     <li> <span className="font-bold">HSL Notation : </span> 
                     HSL stands for Hue, Saturation, and Lightness. It provides a more intuitive way to
                      describe colors. The hsl() function allows you to specify the hue (0 to 360), saturation
                       (0% to 100%), and lightness
                      (0% to 100%) components. For example, hsl(0, 100%, 50%) represents pure red.</li>
                      <li> <span className="font-bold">HSLA Notation : </span> 
                      Similar to HSL, you can use the hsla() function to represent colors with an additional alpha (transparency) component. The alpha value ranges from 0 (fully transparent)
                       to 1 (fully opaque). For example, hsla(0, 100%, 50%, 0.5) represents semi-transparent red.</li>
                    
                  </ul>
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