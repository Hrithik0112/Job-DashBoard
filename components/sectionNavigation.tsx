import React from 'react'

const SectionNavigation = () => {
  return (
    <div className='w-full h-[67px] relative flex items-center border border-gray-300 pl-[100px]'>
        <div className='w-[590px] h-[27px] text-xl font-medium flex justify-between items-center'>
        <p className='text-[#DC4A2D] font-bold'>Job Preview</p>
        <p className='text-[#888888]'>Applicants</p>
        <p className='text-[#888888]'>Match</p>
        <p className='text-[#888888]'>Messeges</p>
        </div>
        <div className='absolute h-[2px] w-[65px] bg-[#DC4A2D] bottom-[1px] left-[125px]'>

        </div>
    </div>
  )
}

export default SectionNavigation