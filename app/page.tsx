import Image from 'next/image'
import Link from 'next/link'
import myImage from "./code.gif"
import nike from "./nike.png"
import phone from "./phone.png"
import Cards from "../components/overAll"
import Review from "../components/Review"
import Mission from "../components/mission"
import logo from './small.png'
 
const colors = [ "FFA41B", "E55807", "FF6000", "FC7300","FF8B13", "black" ]
export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
    <div className='w-screen h-screen bg-white 
    md:pl-20 pl-5
    pr-5 md:pr-20'>
    <nav className=' py-3 md:py-6 
    flex justify-between 
    border-b-2 border-rail '>
        <div className='font-semibold  md:text-lg  flex gap-2 align-bottom justify-end text-blue-300'>
        <Image src={logo} width={35} height={35} alt='logo information'/>
        Coachlib
        </div>
        <div className='flex flex-row text-sm'>
          <div className='mr-2 md:mr-10  hover:text-blue-800'>
          <Link  href="/curriculum" >Curriculum</Link></div>
          <div className='mr-2 md:mr-10  hover:text-blue-800'>
          <Link href="/resources" >Resources</Link>
          </div>
         <div className=' hover:text-blue-800'>
         <Link href="/learning" >Start Learning</Link>
         </div>
        </div>
       </nav>
    <div className='flex flex-col-reverse md:flex-row pt-14'>
        <div className='w-full md:w-2/4 flex flex-col'>
          <h1 className='font-bold md:text-4xl'>
            Beyond Books: Uncover a Multitude of Resources for Learning and Entertainment
          </h1>
          <p className='my-7'>In this digital age, convenience is key. Whether you aspire to become a full-stack developer,
             create innovative software applications, Join us today and embark on a path of endless 
             possibilities together</p>
          <Link href="/overview" className='bg-blue-800 px-6 py-3 w-fit sm:text-sm text-base text-white
          hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500' >
            Start learning
          </Link>
        </div>
        <div className='flex flex-col'>
        <div className='flex flex-row md:pl-20'>
          <div className='rounded-md  -mr-40 mt-10 md:-mr-52 z-10'>
          <Image className='rounded-md'
          height={150}
          width={150}
          src={myImage} alt='Homepage images' />
          </div>
          <div className='rounded-md '>
          <Image className=''
          height={600}
          width={600}
          src={phone} alt='Homepage images' />
          </div>
          <div className='rounded-md -ml-40  md:-ml-72 z-10 mt-48'>
          <Image className='rounded-md'
          height={150}
          width={150}
          src={nike} alt='Homepage images' />
          </div>
        </div>
        </div>
    </div>
    </div>
    {/* main data with components */}
    <Cards />
    <Review />
    <Mission />
    </div>
  )
}
