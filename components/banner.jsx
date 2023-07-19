import React from 'react'

const Banner = (data) => {
  return (
    <div className='md:w-[700px] mt-10 text-sm md:text-base p-3 md:p-10  border rounded-lg '>
        {data.info}
    </div>
  )
}

export default Banner