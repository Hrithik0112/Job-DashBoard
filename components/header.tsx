import React from 'react'
import { Bell, Briefcase, ChevronDown, HandCoins, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import CompanyLogo from "../public/Company_logo.png"

const Header = () => {
  return (
    <div className='flex px-10 py-6 justify-between items-center w-full'>
        {/* logo */}
        <div className='w-[100px] h-[60px] bg-[#e7e7e7] flex justify-center items-center'>
            <p className='font-medium text-xl'>Logo</p>
        </div>
        {/* navigation */}
        <div className='flex w-[534px] p-2 h-[74px] rounded-[36px] border justify-between items-center'>
            {/* job */}
            <div className='flex gap-x-2 bg-orange-700 p-4 rounded-[49px]'>
                <Briefcase color='white' size={24}/>
                <p className='text-white font-medium text-xl'>Jobs</p>
            </div>
            {/* messeges */}
            <div className='flex gap-x-2'>
            <MessageSquare size={24} />
                <p className='font-medium text-xl'>Messeges</p>
            </div>
            {/* payment */}
            <div className='flex gap-x-2 pr-4'>
                <HandCoins size={24}/>
                <p className='font-medium text-xl'>Payments</p>
            </div>
        </div>
        {/* dropdown */}
        <div className='flex px-[10px] py-[14px] h-[60px] items-center gap-x-4 w-[134px]'>
        <Bell size={32}/>
        <div className='flex items-center gap-x-1.5' >

        <Image src={CompanyLogo} alt='company logo' width={40} height={40} />
        <ChevronDown size={20} />
        </div>
        </div>

    </div>
  )
}

export default Header