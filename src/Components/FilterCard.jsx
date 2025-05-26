import React from 'react'
import {FaCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FilterCard = ({item}) => {
  return (
        <>
    <div className="w-full p-4 bg-white rounded-lg shadow-md transform lg:hover:scale-105 transition-transform duration-300 ease-in-out ">
      <Link to={`/appointment/${item._id}`}><img className="w-full h-fit md:w-full md:h-50 object-cover rounded-t-lg bg-blue-100 cursor-pointer" alt="Card Image" src={item.image}/></Link>
      <div className="p-4">
        <p className='text-green-600'> Available <FaCircle className='inline text-green-500 text-sm'/></p>
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <p className="text-gray-600">{item.speciality}</p>
      </div>
    </div>
  
    </>
  )
}

export default FilterCard