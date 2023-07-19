import React from 'react'
import Maindrop from "../../../components/Maindrop"
import Image from 'next/image'
// import full from "./web.png"

const Overview = () => {
  return (
    <div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
               Links in HTML
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
               In this section, you are going to write your first line of code <code className='text-slate-400'> Hello world </code> 
               and display it on your browser. Our purpose in this course is to make the content very 
               friendly and familiar inorder to ease your learning progress by connecting all the fundamental concepts.     </div>
             <div className=' md:w-[650px] mt-10 mb-10'>
             We offer a comprehensive curriculum that covers
              all essential aspects of web development, catering to learners of all 
              levels. From fundamental concepts like <span className='font-bold'> HTML, CSS,</span> and 
              <span className='font-bold'>JavaScript</span> to advanced topics such as front-end and back-end frameworks, databases, and server management, the platform provides a structured
              learning path to ensure you acquire a solid foundation and advanced expertise
             </div>
             <p className='mb-10'>Get enough skills to create a responsive design below</p>
             <div>
                {/* <Image src={full} alt='image layout'  width={400} height={400}/>  */}
             </div>

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