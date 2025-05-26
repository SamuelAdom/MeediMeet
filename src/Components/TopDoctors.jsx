import React, { use } from 'react'
import { doctors } from '../assets/assets'
import DoctorCard from './DoctorCard'
import { Link } from 'react-router-dom'

const TopDoctors = () => {


  return (
    <>
    <div className='flex flex-col justify-center items-center mt-15 space-y-2.5'>
        <h1 className='text-lg md:text-2xl'>Top Doctors</h1>
        <p className='text-lg text-center md:text-md'>Meet our most trusted and highly rated medical professionals</p>
    </div>
    <div className='flex flex-col justify-center items-center md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 gap-2'>
        {doctors.slice(0, 10).map((item)=>{
            return(
           
               <DoctorCard  key={item.id} item={item}/>
            
            )
        })}
    </div>
      <div className='flex justify-center mt-3'>
<Link to="/all-doctors"><button className='bg-blue-400 text-white text-2xl md:text-2xl py-3 px-10 rounded-lg hover:bg-blue-700 transition-all ease-in-out duration-500 cursor-pointer'> View All</button></Link>
    </div>
    </>
  )
}

export default TopDoctors