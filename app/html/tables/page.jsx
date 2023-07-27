import React from 'react'
import Maindrop from "../../../components/Maindrop"
import Image from 'next/image'
import full from "./tcode.png"
import lyer from "./table.png"
import sty from "./sty.png"
import styp from "./style.png"

const Overview = () => {
  return (
    <div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
               Tables in HTML
            </h2>
            <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
            Table is a structured grid of data organized into rows and columns.
             It is one of the essential elements used for displaying tabular data on 
             a web page. Tables are particularly useful when you need to present data
              in a structured format, such as financial information, 
            schedules, or comparison charts.  </div>
             <div className=' md:w-[650px] mt-10 mb-10'>
             To create a table in HTML, you use the <span className="font-bold">table </span>
              element along with a few related tags: 
             </div>
             <div className='flex flex-col gap-3 md:w-[650px] border p-5'>
               <div><span className="font-bold">`table` : </span>This is the main container
                element for the table.</div>
               <div><span className="font-bold">`th` : </span> Stands for "table header" 
               and is used to create header cells for the table. These cells are
                typically used to describe the content of the columns or rows.</div>
               <div><span className="font-bold">`tr` : </span>Stands for "table row" and is used to
                define a row within the table.</div>
               <div><span className="font-bold">`td` : </span> Represents a "table data" cell within a 
               row, where the actual data is placed.</div>
               <div><span className="font-bold">`table` : </span>This is the main container
                element for the table.</div>

             </div>
             
             <div className='my-5'>
                <Image src={full} alt='image layout'  width={400} height={400}/> 
             </div>
             <div>
                <Image className='border' src={lyer} alt='image layout'  width={400} height={400}/> 
             </div>

             <div className='mt-10'>
                <h3>Key features</h3>
                <p className='md:w-[650px] my-5'>In this example, the first row contains 
                header cells (created with <span className="font-bold">th </span> ) to label each column, while the subsequent rows contain regular data cells 
                  (created with <span className="font-bold">td </span> ) holding the actual data.
                </p>
               for example : 
               <div className='my-5'>
                <Image src={sty} alt='image layout'  width={400} height={400}/> 
             </div>
             <div className='my-5'>
                <Image className='border' src={styp} alt='image layout'  width={400} height={400}/> 
             </div>

             </div>
        </div>
    </div>
  )
}

export default Overview