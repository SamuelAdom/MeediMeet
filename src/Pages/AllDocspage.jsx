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
    <div className="m-3 sm:m-10 flex flex-col sm:flex-row">

      <div className="flex flex-col items-start">
        <h1 className="text-lg sm:text-2xl">Browse through the doctors specialist.</h1>
        <button onClick={()=>setShowFilter(prev=>!prev)} className={`py-1.5 px-4 rounded-sm border transition-all sm:hidden ${showFilter?"bg-blue-400 text-white text-sm":""}`}>Filter</button>
        <div className={`flex-col gap-2.5 w-full sm:w-40 mt-1 ${showFilter?"flex":"hidden sm:flex" }`}>
            <p onClick={()=>speciality==="General physician"? navigate("/all-doctors"): navigate("/all-doctors/General physician")} className={`text-sm md:text-md cursor-pointer border-1 border-green-300 text-gray-800 py-1.5 px-4 rounded-md ${speciality==="General physician"? "bg-gray-400 text-black":""}`}>General physician</p>
        <p onClick={()=>speciality==="Gynecologist"? navigate("/all-doctors"): navigate("/all-doctors/Gynecologist")} className={`text-sm md:text-md cursor-pointer border-1 border-green-300 text-gray-800 py-1.5 px-4 rounded-md  ${speciality==="Gynecologist"? "bg-gray-400 text-black":""}`}>Gynecologist</p>
        <p onClick={()=>speciality==="Dermatologist"? navigate("/all-doctors"): navigate("/all-doctors/Dermatologist")} className={`text-sm md:text-md cursor-pointer border-1 border-green-300 text-gray-800 py-1.5 px-4 rounded-md  ${speciality==="Dermatologist"? "bg-gray-400 text-black":""}`}>Dermatologist</p>
        <p onClick={()=>speciality==="Pediatricians"? navigate("/all-doctors"): navigate("/all-doctors/Pediatricians")} className={`text-sm md:text-md cursor-pointer border-1 border-green-300 text-gray-800 py-1.5 px-4 rounded-md  ${speciality==="Pediatricians"? "bg-gray-400 text-black":""}`}>Pediatricians</p>
        <p onClick={()=>speciality==="Neurologist"? navigate("/all-doctors"): navigate("/all-doctors/Neurologist")} className={`text-sm md:text-md cursor-pointer border-1 border-green-300 text-gray-800 py-1.5 px-4 rounded-md  ${speciality==="Neurologist"? "bg-gray-400 text-black":""}`}>Neurologist</p>
        <p onClick={()=>speciality==="Gastroenterologist"? navigate("/all-doctors"): navigate("/all-doctors/Gastroenterologist")} className={`text-sm md:text-md  cursor-pointer border-1 border-green-300 text-gray-800 py-1.5 px-4 rounded-md ${speciality==="Gastroenterologist"? "bg-gray-400 text-black":""}`}>Gastroenterologist</p>
        </div>
      
      </div>
      <div className="grid grid-cols-1 sm:ml-10 md:grid-cols-2 lg:grid-cols-3 sm:gap-5">
        {filter.map((item)=>(
          <FilterCard key={item.id} item={item}/>
        
        ))}
      </div>
    </div>
  )
}

export default AllDocspage