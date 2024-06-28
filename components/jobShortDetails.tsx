import { MapPin } from 'lucide-react'
import React from 'react'
import { LiaCoinsSolid } from "react-icons/lia";

const JobShortDetails = () => {
  return (
    <div className='py-9 flex-col pl-[100px]'>
        {/* top section */}
        <div className='flex gap-x-3 items-center mb-6'>
            <p className='font-bold text-4xl'>Senior Product Designer</p>
            <div className='h-1 w-1 rounded-full bg-[#D1D1D1]'></div>
            <p className='text-sm '>posted 2 days ago</p>
            <div className='bg-green-100 border border-green-400 text-[#067647] text-xs font-medium py-1 px-2 rounded-xl '>
            • Open
            </div>
        </div>
        {/* bottom section */}
        <div className='flex gap-x-4 items-center'>
            <div className='flex gap-x-2'>
                <MapPin size={24}/>
                <p className='text-xl'>Delaware, USA</p>
            </div>
            {/* dot */}
            <div className='h-1 w-1 rounded-full bg-[#D1D1D1]'></div>
            <div className='flex gap-x-2'>
                <LiaCoinsSolid size={24}/>
                <p className='text-xl'>$300k-$400k</p>
            </div>
        </div>
    </div>
  )
}

export default JobShortDetails