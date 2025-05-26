import React from 'react'
import {specialityData} from '../assets/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <> 
   
       <div id='speciality' className='flex justify-center'>
        <div className='flex items-center flex-col space-y-2'>
            <p className='text-lg md:text-2xl'>Find By Speciality</p>
            <p className='text-lg text-center md:text-md'>Search and connect with doctors based on their medical specialty</p>
        </div>
    </div>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:flex md:justify-center md:space-x-4 mt-3">
  {specialityData.map((item) => (
    <div
      className="flex flex-col items-center gap-2"
      key={item.id}
    >
      <Link to={`/all-doctors/${item.speciality}`}>
      <img
        className="cursor-pointer md:hover:-translate-y-2 transition-transform w-20 md:w-25"
        src={item.image}
        alt={item.speciality}
      />
      </Link>
      <p className="cursor-pointer text-sm">{item.speciality}</p>
    </div>
  ))}
</div>

    </>

    
  )
}

export default Speciality