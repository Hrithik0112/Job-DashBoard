import Image from 'next/image'
import React from 'react'
import companyLogo from "../public/compnay-Logo.png"

const CompanyDetails = () => {
  return (
    <div className='py-8 flex flex-col gap-y-4 border-t border-[#e7e7e7]'>
        {/* compnay name and logo */}
        <div className='py-2.5 pr-2.5'>
            <div className='flex gap-x-4'>
            <Image src={companyLogo} alt='compnay logo'/>
            <p className='text-xl'>Atlassian</p>
            </div>
        </div>
        {/* company details */}
        
        <div className='flex gap-x-12'>
            {/* left side  */}
            <div className='flex flex-col gap-y-6'>
                <div className='flex flex-col gap-y-2'>
                    <p className="text-sm">Company size</p>
                    <p className='font-medium text-base'>1k - 2k Employees</p>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <p className="text-sm">Sector</p>
                    <p className='font-medium text-base'>Informational Technology, Infrastructure</p>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <p className="text-sm">Founded In</p>
                    <p className='font-medium text-base'>2019</p>
                </div>

            </div>
            {/* right side */}
            <div className='flex flex-col gap-y-6'>
                <div className='flex flex-col gap-y-2'>
                    <p className="text-sm">Type</p>
                    <p className='font-medium text-base'>Private</p>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <p className="text-sm">Funding</p>
                    <p className='font-medium text-base'>Bootstrapped</p>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <p className="text-sm">Founded By</p>
                    <p className='font-medium text-base'>Scott Farquhar, Mike Cannon-Brookes</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default CompanyDetails