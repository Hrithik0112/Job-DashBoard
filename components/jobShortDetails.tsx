import { MapPin } from 'lucide-react'
import React from 'react'
import { LiaCoinsSolid } from "react-icons/lia";

const JobShortDetails = () => {
  return (
    <div className='py-9 flex-col'>
        {/* top section */}
        <div className='flex gap-x-3 items-center mb-6'>
            <p className='font-bold text-4xl'>Senior Product Designer</p>
            <div className='h-1 w-1 rounded-full bg-[#e7e7e7]'></div>
            <p className='text-sm '>posted 2 days ago</p>
            <div className='bg-green-100 text-green-600 text-xs py-1 px-2 rounded-xl '>
            • open
            </div>
        </div>
        {/* bottom section */}
        <div className='flex gap-x-4 items-center'>
            <div className='flex gap-x-2'>
                <MapPin size={24}/>
                <p className='text-xl'>Delaware, USA</p>
            </div>
            {/* dot */}
            <div className='h-1 w-1 rounded-full bg-[#e7e7e7]'></div>
            <div className='flex gap-x-2'>
                <LiaCoinsSolid size={24}/>
                <p className='text-xl'>$300k-$400k</p>
            </div>
        </div>
    </div>
  )
}

export default JobShortDetails