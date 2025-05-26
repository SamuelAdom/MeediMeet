import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import DoctorCard from './DoctorCard'

const RelatedDoctors = ({speciality,docId}) => {
    const {doctors}=useContext(AppContext)
    const[relDocs, setRelDocs]=useState([])
    useEffect(()=>{
        if(doctors.length>0 && speciality){
            const doctorData=doctors.filter((doc)=>doc.speciality===speciality && doc._id!==docId)
            setRelDocs(doctorData)

        }
    },[speciality,docId,doctors])
  return (
    <div className='flex  flex-col justify-center items-center md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 gap-2 md:ml-20'>
        {relDocs.slice(0, 5).map((item)=>{
            return(
           
               <DoctorCard  key={item.id} item={item}/>
            
            )
        })}
    </div>
  )
}

export default RelatedDoctors