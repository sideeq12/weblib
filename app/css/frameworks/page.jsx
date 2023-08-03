import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import tail from './tail.png'
import mat from './-materialize.png'
import bul from './bulma.png'
import boost from './bootstrap-logo.png'
import sem from './semantic.png'
import found from './found.png'
import Maindrop from '@/components/Maindrop'

const Page = () => {
  return (
<div className='flex bg-white'>
        <Maindrop />
        <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5'>
            <h2 className='text-3xl font-bold'>
              CSS Frameworks
            </h2>
            <div className=' md:w-[650px] my-10 text-sm md:text-base '>
            CSS frameworks are pre-built libraries that provide a collection of CSS and
             sometimes JavaScript components to help streamline web development. These frameworks aim 
             to simplify the process of designing and styling websites by providing a set of pre-designed
              UI components, layout systems, and utility classes. Using a CSS framework can save time and effort, as it 
            eliminates the need to write CSS styles from scratch and promotes consistency across web projects.
          
             </div>
             <h3 className="font-semibold">Some popular CSS frameworks include:</h3>
             <div className='md:w-[650px]'>
              <ul className='flex flex-col gap-8'>
              <li>
               <span className="font-semibold">1. Boostrap  </span>
               <Image src={boost} width={400} height={400} className='my-5' />
               <p>
               Bootstrap is one of the most widely used CSS frameworks developed by Twitter. It offers a comprehensive collection of responsive CSS components and JavaScript plugins, making it easy to create mobile-first and responsive web designs. Bootstrap 
               provides a grid system, buttons, forms, navigation components, modals, and much more.</p>
               <br />
               <Link className='border py-3 px-8 border-blue-500 text-blue-500  mt-10' 
               href='https://getbootstrap.com/docs/5.3/getting-started/introduction/' >Get started with Boostrap</Link>
               </li>
               <li>
               <span className="font-semibold">2. Foundation  </span>

               <Image src={found} width={200} height={200} className='my-5' />
               <p>
               Foundation is a powerful CSS framework by ZURB that focuses on building 
               responsive and customizable websites. It provides a robust grid system, UI components,
                and pre-designed styles for typography,
                buttons, forms, and more. Foundation also supports SASS for further customization.</p>
                <br />
               <Link target='_blank' className='border py-3 px-8 border-blue-500 text-blue-500  mt-10' 
               href='https://get.foundation/sites/docs/' >Get started with Foundation</Link>
              </li>
               <li>
               <span className="font-semibold">3. Materialize  </span>
               <Image src={mat} width={400} height={400} className='my-5' />
             <p>  Materialize is based on Google's Material Design guidelines. It brings the principles
                of Material Design to the web, offering a clean and visually appealing UI. Materialize 
                includes a grid 
               system, cards, buttons, forms, and other components following the Material
                Design principles.</p>
                <br />
               <Link className='border py-3 px-8 border-blue-500 text-blue-500  mt-10' 
               href='https://mui.com/material-ui/' >Get 
               started with Materialize</Link>
               </li>
               <li>
               <span className="font-semibold">4. Tailwind  </span>

               <Image src={tail} width={400} height={400} className='my-5' />
              <p>
              Tailwind CSS takes a different approach compared to other CSS frameworks. 
               It offers a utility-first CSS approach, where you compose styles by combining utility 
               classes. Tailwind provides an 
               extensive set of utility classes that you can apply directly in 
               your HTML to style elements.
              </p>
              <br />
               <Link className='border py-3 px-8 border-blue-500 text-blue-500  mt-10' 
               href='https://tailwindcss.com/docs/installation' >Get 
               started with Tailwindcss</Link>
              </li>
               <li>
               <span className="font-semibold">5. Semantic UI </span>
               <Image src={sem} width={400} height={400} className='my-5' />
               <p>Semantic UI emphasizes semantic HTML and expressive and intuitive component names.
                It has a well-organized structure and offers 
               various components like grids, forms, buttons, and icons. It also supports theming and 
               customization.</p>
               <br />
               <Link className='border py-3 px-8 border-blue-500 text-blue-500  mt-10' 
               href='https://semantic-ui.com/introduction/getting-started.html' >Get started 
               with Semantic UI</Link>
               </li>
               <li>
               <span className="font-semibold">6. Bulma  </span>
               <Image src={bul} width={400} height={400} className='my-5' />
              <p> Bulma is a modern CSS framework that is lightweight and flexible.
                It is based on a mobile-first approach and uses Flexbox for layout. 
                Bulma provides a range of components, such as 
               navigation bars, cards, modals, and more, allowing
                for quick and responsive web development.</p>
                <br />
               <Link className='border py-3 px-8 border-blue-500 text-blue-500  mt-10' 
               href='https://bulma.io/documentation/overview/start/' >Get started
                with Bulma</Link>
                </li>
              </ul>
             </div>

             <div className='mt-10'>
               
              

             </div>
        </div>
    </div>
  )
}

export default Page