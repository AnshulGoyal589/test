import React from 'react'

const AboutCard = ({about}) => {
  return (
    <div className='border-2 border-[#DFDFDF] rounded-[10px] flex flex-col gap-3 xl:gap-3 items-center w-[265px] xl:w-[240px] px-4 xl:py-4 py-6 xl:h-[420px] h-[450px]'>
       <div className='font-semibold text-2xl xl:text-xl'>{about.title}</div>
        <div className='text-center xl:text-base xl:leading-tight leading-snug'>{about.description}</div>
    </div>
  )
}

export default AboutCard;