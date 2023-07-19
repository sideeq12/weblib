import React from 'react'
import Maindrop from '@/components/Maindrop'
import Image from 'next/image'
import Banner from '@/components/banner'
import Code from '@/components/code'
import full from "./helloWorld.png"

const Overview = () => {
  return (
    <div className='flex bg-white'>
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
             <ul>
               <li> DOCTYPE html: This is the document type declaration and specifies that the document is an HTML5 document.
                It helps the browser to understand the version of HTML being used</li>
             </ul>
             

             <div className='mt-10'>
                <h3>Key features</h3>
                <p className='md:w-[650px] mt-10 mb-10'>
                Interactive Learning: Engaging and interactive learning
                 experiences are at the core of the platform. Through a combination of video tutorials, quizzes, coding exercises, and real-world projects, learners can apply their knowledge in a practical setting. The platform provides a sandbox environment for learners to experiment with code and 
                see the immediate results of their HTML and CSS implementations.
                </p>
                <p className='md:w-[650px] mt-10 mb-10'>
                Personalized Learning Paths: The platform recognizes that each learner has unique goals and learning preferences. It offers personalized learning paths that adapt to the individual's progress, allowing them to learn at their own pace. Learners can also set goals, track their progress, 
                and receive tailored recommendations to optimize their learning journey.
                </p>
                <p className='md:w-[650px] mt-10 mb-10'>
                Industry-Relevant Projects: To reinforce the learned concepts, the platform offers hands-on projects inspired by real-world scenarios. These projects provide learners with practical experience in building responsive websites, optimizing performance, and implementing best practices.
                 By working on these projects, learners can build a 
                </p>
                <p className='md:w-[650px] mt-10 mb-10'>
                Mobile-Friendly Learning: Recognizing the importance of mobile devices in today's digital landscape, the platform is optimized for mobile learning. 
                </p>

             </div>
        </div>
    </div>
  )
}

export default Overview