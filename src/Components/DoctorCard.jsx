import React from 'react';
import { FaCircle } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'


const DoctorCard = ({ item }) => {
  const navigate= useNavigate()
  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md transform lg:hover:scale-105 transition-transform duration-300 ease-in-out gap-1.5">
      <div onClick={()=>{navigate(`/appointment/${item._id}`),scrollTo(0,0)}}>
          <img
          className="w-full h-fit sm:w-full sm:h-full object-cover rounded-t-lg bg-blue-100 cursor-pointer"
          alt="Card Image"
          src={item.image}
        />
      </div>
     
      <div className="p-4">
        <p className="text-green-600">
          Available <FaCircle className="inline text-green-500 text-sm" />
        </p>
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <p className="text-gray-600">{item.speciality}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
