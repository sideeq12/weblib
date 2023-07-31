import React from 'react'
import Maindrop from '@/components/Maindrop'

const Page = () => {
  return (
//     <div>    ntroduction to CSS
//     Understanding the role of CSS in web development
//     Including CSS in HTML

// CSS Selectors and Properties
//     Using various CSS selectors
//     Commonly used CSS properties

// The Box Model
//     Understanding the CSS box model
//     Box sizing and layout

// Layout and Positioning
//     CSS display property and layout models
//     Positioning elements using CSS

// Responsive Web Design
//     Introduction to responsive design
//     Media queries and fluid layouts

// CSS Transitions and Animations
//     Creating transitions and animations with CSS

// Advanced Selectors and Pseudo-elements
//     Advanced CSS selectors
//     Creative uses of pseudo-elements

// CSS Preprocessors
//     Introduction to CSS preprocessors (e.g., Sass or Less)
//     Working with variables and mixins

// CSS Frameworks
//     Exploring popular CSS frameworks (e.g., Bootstrap)

// CSS Architecture and Best Practices
//     Writing clean and maintainable CSS code
//     BEM methodology and CSS resets

// CSS Performance and Optimization
//     Techniques for improving CSS performance
//     Reducing render-blocking CSS

// CSS3 and Future Trends
//     Exploring CSS3 features
//     Keeping up with the latest CSS trends and upcoming specifications

// This revised curriculum covers essential concepts and 

// topics in CSS, allowing you to progress steadily and build a strong foundation in Cascading
//  Style Sheets. Remember to practice regularly and work on small projects to reinforce your learning.
//   Happy studying!</div>
<div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
                Introduction to CSS (Cascading stylesheet)
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
                In the previous chapters, we discuss about HTML and elements of html coupled with
                their usecases, but we could not style them or make the interface more appealing for users,
                such as giving colors to the text, or making it bigger , resizing our images. There are several 
                action we can do with our html elements. So, let's go deep in the css Architecture and experiment how 
                it can be used in our project.   </div>
             <div className=' md:w-[650px] my-10'>
                There are three seperate ways of writing css. 
                <ul>
                    <li>Inline css</li>
                    <li>Internal css (Embedded) </li>
                    <li>External css </li>
                </ul>
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