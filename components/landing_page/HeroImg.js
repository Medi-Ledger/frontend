import React from 'react'
import Image from 'next/image'

const HeroImg = () => {
  return (
    <div className="flex justify-center items-center relative rounded-md mt-5">
      <div className="absolute bottom-0 left-0 bg-[#FFC671] w-3/4 rounded-tr-md z-10" style={{height: "470px"}}></div>
      <div className='absolute top-0 left-20 border-y border-l border-gray-400 h-full w-full z-0 grid place-items-center'>
        <div class="grid grid-cols-3 grid-rows-3 w-full h-full">
            <div className="border-r border-b border-gray-400 hover:border-0"></div>
            <div className="border-b border-gray-400 hover:border-0"></div>
            <div className="border-x border-b border-gray-400 hover:border-0"></div>
            <div className=""></div>
            <div className=""></div>
            <div className="border-x border-gray-400 hover:border-0"></div>
            <div className=""></div>
            <div className="border-t border-gray-400 hover:border-0"></div>
            <div className="border-x border-t border-gray-400 hover:border-0"></div>
        </div>
      </div>
      <Image src="/doctor.png" height={450} width={450} className="relative z-20 pt-20"/>
    </div>
  )
}

export default HeroImg