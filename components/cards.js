import React from 'react';
import Image from 'next/image';

const Card = (info) => {
  return (
    <div className=' mb-8 md:mr-10 w-fit md:w-3/12 border h-fit p-10 hover:cursor-pointer
     hover:text-white hover:bg-slate-900 '>
          <Image src={info.image} width={60} alt="cards layout" />
          <h3 className='mb-5 mt-5 md:mt-10 text-lg font-bold'>{info.headline}</h3>
        <p className='text-gray'>
        {info.message}
        </p>
    </div>
  )
}

export default Card;