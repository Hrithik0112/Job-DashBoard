import Image from 'next/image'
import React from 'react'
import Skills1 from "../public/Skills1.png"
import Skills2 from "../public/Skills2.png"
import Skills3 from "../public/Skills3.png"

const SkillsRequired = () => {
  return (
    <div className='py-8 flex gap-x-16 border-t border-[#e7e7e7]'>
        {/* section 1 */}
        <div className='flex-col'>
            <p>Skills Requiried</p>
            <Image src={Skills1} alt='skills image' className='w-[66px] h-[24px] mt-2'/>
            <Image src={Skills2} alt='skills image' className='w-[126px] h-[24px] mt-2'/>
            <Image src={Skills3} alt='skills image' className='w-[88px] h-[24px] mt-2'/>

        </div>
        {/* section 2 */}
        <div className='flex-col gap-y-2'>
            <p className='text-sm'>Prefered language</p>
            <p className='font-bold text-balance'>English</p>

        </div>
        {/* section 3 */}
        <div className='flex-col gap-y-2'>
            <p className='text-sm'>Type</p>
            <p className='font-bold text-balance'>Full Time</p>

        </div>
        {/* section 4 */}
        <div className='flex-col gap-y-2'>
            <p className='text-sm'>Years of experience</p>
            <p className='font-bold text-balance'>3+ Years of experience</p>

        </div>

    </div>
  )
}

export default SkillsRequired