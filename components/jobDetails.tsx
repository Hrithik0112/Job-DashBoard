import React from 'react'
import JobShortDetails from './jobShortDetails'
import SkillsRequired from './skillsRequired'
import JobDescription from './jobDescription'
import CompanyDetails from './companyDetails'
import Controls from './controls'

const JobDetails = () => {
  return (
    <div className='w-full min-h-screen flex'>
      {/* left side 65% */}
      <div className='w-[75%] pl-[100px] pt-9'>
      <JobShortDetails/>
      <SkillsRequired/>
      <JobDescription/>
      <CompanyDetails/>
      </div>
      {/* right side 35% */}
      <div className='w-[25%] px-6 pt-8 border-l border-[#e7e7e7]'>
      <Controls/>
      </div>
    </div>
  )
}

export default JobDetails