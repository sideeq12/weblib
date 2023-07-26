import React from 'react'
import Maindrop from "../../../components/Maindrop"
import Image from 'next/image'
import full from "./img.png"
import imgres from './imgres.png'
import withcode from './withcode.png'

const Overview = () => {
  return (
    <div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
              Images in HTML 
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>ChatGPT

In HTML (Hypertext Markup Language), the <span className="font-bold"> img </span> tag is used 
to embed an image in a web page. It allows you to display images 
on your website so that users can see pictures, logos, illustrations, or any other visual content.
 The <span className="font-bold"> img </span> tag is an empty tag, which means it doesn't have a closing tag. Instead, it uses attributes 
to define the properties of the image.     </div>

             <div className=' md:w-[650px] my-10'>
               
             </div>
             <div>
                <Image src={full} alt='image layout'  width={400} height={400}/> 
             </div>
              <div className="my-10">Result on browser</div>
              <div>
                <Image className='border' src={imgres} alt='image layout'  width={400} height={400}/> 
             </div>

             <div className='mt-10 md:w-[650px]'>
               <h3>Explanation of the attributes</h3>
                <p className='md:w-[650px] mt-10 mb-10'>
                <span className="font-bold">`src` </span>: This is a required attribute and specifies the URL (web address) of the image you want to
                 display. It can be a relative or absolute URL.  </p>
                 <div><span className="font-bold">`alt` : </span> This is also a required attribute. It provides alternative text for the image, which is displayed if the image cannot be loaded or 
                 if the user is using an assistive technology like a screen reader. The <span className="font-bold">alt 
                 </span>  attribute is essential for accessibility purposes.</div>
                <div>
                  <div> <span className="font-bold">width :</span> (optional): Specifies the width of the image in pixels. 
                  It's used to control the displayed size of the image on the webpage. </div>
                  <div> <span className="font-bold">height :</span>  (optional): Specifies the height
                   of the image in pixels. 
                  Like the width attribute, it controls the displayed size of the image. </div>
             </div>
              <div className="my-10">Here is an example on how to use img tag</div>
              <div>
                <Image className='border' src={withcode} alt='image layout'  width={400} height={400}/> 
             </div>
             <div className="my-5 md:w-[700px]">Remember that HTML elements are used to structure the content of a web page, so these list elements help you 
             organize information in a meaningful and hierarchical manner.</div>


             </div>
        </div>
    </div>
  )
}

export default Overview