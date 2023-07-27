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
               Welcome to the first section
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>Forms are crucial element
             that allows users to input and submit data to a web server. Forms are
              used for a variety of purposes, such as collecting user information, 
              performing searches, submitting feedback, and much more. When a user fills out 
              a form and clicks the "Submit" button, 
            the data is sent to a server for processing or storage. </div>

             <p className='my-5'>To create a form in HTML, you use the
              <span className="form-bold">form </span> element along with various form-related 
               elements and attributes. The most commonly used form elements are:</p>
               <div className='my-5 flex flex-col gap-3'>
                  <div>
                     <span className="font-bold">form : </span> This is the main 
                     container element for the form. It encompasses all the form elements and defines how
                      the data will be sent to the server.
                  </div>
                  <div>
                     <span className="font-bold">Input : </span>  The input element is used 
                     to create various types of form controls, such as text
                      fields, checkboxes, radio buttons, buttons, etc.
                  </div><div>
                     <span className="font-bold">Textarea </span> : This element allows users to
                      input multi-line text, 
                     useful for longer messages or comments.
                  </div><div>
                     <span className="font-bold">select : </span>  Used to create dropdown lists
                      (also known as select menus) 
                     from which users can choose one or more options.
                  </div>
                  <div>
                     <span className="font-bold">option : </span>  UUsed as a child element of <span className="font-bold">select</span> to define individual options within a dropdown list.
                  </div>
                  <div>
                     <span className="font-bold">button : </span>  Represents a 
                     clickable button that can be used to submit 
                     the form or trigger custom JavaScript functions.
                  </div>

               </div>
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