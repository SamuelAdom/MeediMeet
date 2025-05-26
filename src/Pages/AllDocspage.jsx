import React, { useContext,useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import {AppContext} from '../Context/AppContext'
import FilterCard from '../Components/FilterCard'





const AllDocspage = () => {
  const[filter, setFilter]=useState([])
  const[showFilter, setShowFilter]=useState(false)
  const {speciality}=useParams()
const{doctors}=useContext(AppContext)
const navigate=useNavigate()

const applyFilter=()=>{
  if(speciality){
    setFilter(doctors.filter(doc=>doc.speciality===speciality))
  }
  else{
    setFilter(doctors)
  }

}

useEffect(()=>{
applyFilter()
},[doctors,speciality])



  return (
    <div className="m-10 flex flex-row">
      <div className="flex flex-col gap-2 items-start">
        <h1 className="text-sm md:text-2xl">Browse through the doctors specialist.</h1>
        <button>Filter</button>
        <div className='flex flex-col gap-2.3'>
            <p onClick={()=>speciality==="General physician"? navigate("/all-doctors"): navigate("/all-doctors/General physician")} className={`text-sm md:text-md cursor-pointer border-1 border-green-300 text-gray-800 py-1.5 px-4 rounded-md w-40 ${speciality==="General physician"? "bg-gray-400 text-black":""}`}>General physician</p>
        <p onClick={()=>speciality==="Gynecologist"? navigate("/all-doctors"): navigate("/all-doctors/Gynecologist")} className={`text-sm md:text-md cursor-pointer border-1 border-green-300 text-gray-800 py-1.5 px-4 rounded-md w-40 ${speciality==="Gynecologist"? "bg-gray-400 text-black":""}`}>Gynecologist</p>
        <p onClick={()=>speciality==="Dermatologist"? navigate("/all-doctors"): navigate("/all-doctors/Dermatologist")} className={`text-sm md:text-md cursor-pointer border-1 border-green-300 text-gray-800 py-1.5 px-4 rounded-md w-40 ${speciality==="Dermatologist"? "bg-gray-400 text-black":""}`}>Dermatologist</p>
        <p onClick={()=>speciality==="Pediatricians"? navigate("/all-doctors"): navigate("/all-doctors/Pediatricians")} className={`text-sm md:text-md cursor-pointer border-1 border-green-300 text-gray-800 py-1.5 px-4 rounded-md w-40 ${speciality==="Pediatricians"? "bg-gray-400 text-black":""}`}>Pediatricians</p>
        <p onClick={()=>speciality==="Neurologist"? navigate("/all-doctors"): navigate("/all-doctors/Neurologist")} className={`text-sm md:text-md cursor-pointer border-1 border-green-300 text-gray-800 py-1.5 px-4 rounded-md w-40 ${speciality==="Neurologist"? "bg-gray-400 text-black":""}`}>Neurologist</p>
        <p onClick={()=>speciality==="Gastroenterologist"? navigate("/all-doctors"): navigate("/all-doctors/Gastroenterologist")} className={`text-sm md:text-md  cursor-pointer border-1 border-green-300 text-gray-800 py-1.5 px-4 rounded-md w-40 ${speciality==="Gastroenterologist"? "bg-gray-400 text-black":""}`}>Gastroenterologist</p>
        </div>
      
      </div>
      <div className="grid grid-cols-1 ml-10 md:grid-cols-2 lg:grid-cols-3">
        {filter.map((item)=>(
          <FilterCard key={item.id} item={item}/>
        
        ))}
      </div>
    </div>
  )
}

export default AllDocspage