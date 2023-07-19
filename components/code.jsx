import React from 'react'

const Code = (data) => {
  return (
    <div 
    className='md:w-[650px] mt-10 text-sm md:text-base p-3 md:p-10  bg-stone-800 text-white border rounded-lg '
    > {data.children}
        {data.msg}
    {data.children}
    {}
    </div>
  )
}

export default Code