import React from 'react'
import Hero from '../Components/Hero'
import Speciality from '../Components/Speciality'
import TopDoctors from '../Components/TopDoctors'
import Download from '../Components/Download'

const HomePage = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Hero/>
      <Speciality/>
      <TopDoctors/>
      <Download/>
    </div>
  )
}

export default HomePage