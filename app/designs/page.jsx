import React from 'react'
import Maindrop from '@/components/Maindrop'
import Link from 'next/link'

function Design() {
  return (<div className='flex bg-white'>
  <Maindrop />
  <div className='md:pt-32 md:pl-10 pl-5 pt-10 pr-5 pb-10'>
      <h2 className='text-3xl font-bold'>
       Design resources
      </h2>
      <div className=' md:w-[650px] mt-10 text-sm md:text-base '>
        Learning skills require checking several other teaching platform and track your progress coupled
        with learning from them alongside, from the beginning of our chapters where started from the basic 
        Html and completed CSS course chapters, the next language to learn is Javascript and this would boost your 
        understanding on User interactions and Dynamic Content loading , before learning Frontend MVC frameworks like Reactjs, Angularjs or Vuejs.
        <br />
        Kindly check the resources below for Javascript and Frameworks courses.   </div>
      <div className="my-5 md:w-[650px]">
            <ul className='flex flex-col gap-5'>
               <li> <span className="font-bold">Dribble : </span>
               A well-known platform for designers to showcase their work, discover 
               other designers' work, and get inspired by a wide range of design projects. 
                <span className='ml-3 font-semibold w-[100px] text-blue-500 text-sm flex gap-2 align-middle'>
                    <Link href='https://dribbble.com/following'>visit site
                    </Link><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
  <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
</svg></span>
               </li>
               <li> <span className="font-bold">Behance : </span> 
               Part of the Adobe family, Behance is another popular platform where designers
                can showcase their portfolios and discover creative work from artists around the world.
                <span className='ml-3 font-semibold w-[100px] text-blue-500 text-sm flex gap-2 align-middle'>
                    <Link href='https://www.behance.net/'>visit site
                    </Link><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
  <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
</svg></span>
                </li>
               <li> <span className="font-bold">Awwards : </span> 
               This platform highlights exceptional web design projects,
                providing recognition and inspiration to designers pushing
                 the boundaries of creativity. 
                    <span className='ml-3 font-semibold w-[100px] text-blue-500 text-sm flex gap-2 align-middle'>
                    <Link href='https://www.awwwards.com/'>visit site
                    </Link><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
  <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
</svg></span></li>
               <li> <span className="font-bold"> SiteInspire : </span>
               A curated gallery of web design inspiration, 
               featuring well-designed and innovative websites across various industries.
               <span className='ml-3 font-semibold w-[100px] text-blue-500 text-sm flex gap-2 align-middle'>
                    <Link href='https://www.siteinspire.com/'>visit site
                    </Link><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
  <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
</svg></span></li>
               <li> <span className="font-bold"> CSSDA (css design awwards) : </span>
               An awards platform that recognizes and showcases outstanding 
               web design and development work.
                <span className='ml-3 font-semibold w-[100px] text-blue-500 text-sm flex gap-2 align-middle'>
                    <Link href='https://www.cssdesignawards.com/'>visit site
                    </Link><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
  <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
</svg></span></li>
            
               
                <li> <span className="font-bold">Webdesign Inspiration: </span>
                A platform that showcases a wide variety of websites from different
                 industries, helping designers find unique and creative ideas.
                 <span className='ml-3 font-semibold w-[100px] text-blue-500 text-sm flex gap-2 align-middle'>
                    <Link href='https://bestdesignideas.com/'>visit site
                    </Link><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
  <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
</svg></span></li>
                 <li> <span className="font-bold">The Best Designs: </span> 
                 A website gallery featuring top-quality website designs, 
                 providing designers with a place to find fresh inspiration.
                  <span className='ml-3 font-semibold w-[100px] text-blue-500 text-sm flex gap-2 align-middle'>
                    <Link href='http://www.thebestdesigns.com/'>visit site
                    </Link><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
  <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
</svg></span></li>
              
            </ul>
          </div>

       <button className='border py-3 px-8'>Next</button>

  </div>
</div>
 
  )
}

export default Design