import { Eye, MessageSquare, Pencil, Trash2 } from 'lucide-react'
import React from 'react'
import { LuUsers } from 'react-icons/lu'
import { TbUserCheck } from 'react-icons/tb'

const Controls = () => {
  return (
    <div className='flex flex-col gap-y-6'>
        {/* buttons sction */}
        <div className='flex justify-between '>
            {/* button one */}
            <div className='flex justify-center items-center px-6 py-3 gap-x-2.5 bg-orange-50 rounded-lg border border-[#DC4A2D]'>
            <Trash2 size={20} color='#DC4A2D' />
            <p className='text-[#DC4A2D]'>Delete Job</p>
            </div>
            {/* button 2 */}
            <div className='flex justify-center items-center px-6 py-3 gap-x-2.5  bg-[#DC4A2D] rounded-lg'>
            <Pencil  size={20} color='white' />
            <p className='text-white'>Edit Job</p>
            </div>

        </div>
        {/* dashboard bata */}
        <div className='p-3 flex flex-col gap-y-4 '>
            {/* details 1 */}
            <div className='flex justify-between items-center'>
                <div className='flex p-2.5 gap-x-2.5'>
                <LuUsers size={20} />
                <p>Applicants</p>
                </div>
                <p>400</p>

            </div>
            {/* line  */}
            <div className='h-[1px] bg-[#e7e7e7]'></div>
            {/* details 2 */}
            <div className='flex justify-between items-center'>
                <div className='flex p-2.5 gap-x-2.5'>
                <TbUserCheck size={20} />

                <p>Matches</p>
                </div>
                <p>100</p>

            </div>
            {/* line  */}
            <div className='h-[1px] bg-[#e7e7e7]'></div>
            {/* details 3 */}
            <div className='flex justify-between items-center'>
                <div className='flex p-2.5 gap-x-2.5'>
                <MessageSquare size={20} />
                <p>Messages</p>
                </div>
                <p>147</p>

            </div>
            {/* line  */}
            <div className='h-[1px] bg-[#e7e7e7]'></div>
            {/* details 4 */}
            <div className='flex justify-between items-center'>
                <div className='flex p-2.5 gap-x-2.5'>
                <Eye size={20} />
                <p>Views</p>
                </div>
                <p>800</p>

            </div>
        </div>
    </div>
  )
}

export default Controls