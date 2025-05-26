import React from 'react'
import { assets } from '../assets/assets'
import Card from '../Components/Card'

const AboutPage = () => {
  return (
    <>
    <div className='flex justify-center mt-8'>
      <div><h1 className='text-2xl font-bold'>ABOUT US</h1></div>
    </div>
    <div className='flex flex-col mt-7 gap-5 md:flex-row'>
      <img className='h-full w-100 p-8' src={assets.about_image} alt="" />
     <div className='flex flex-col space-y-8 md:mt-10 p-3'>
       <p className='leading-8'>At MediMeet, we are revolutionizing the way people access healthcare. Our platform bridges the gap between patients and healthcare providers by offering a seamless and secure environment to schedule medical appointments, attend virtual consultations, and manage health records all in one place.</p>
     
      <h1 className='text-2xl font-bold'>Our Vision</h1>
      <p className='leading-8'>Founded with the goal of making healthcare more accessible, efficient, and patient-centric, MediMeet empowers individuals to take control of their health while helping doctors and clinics streamline their services. Whether it's booking a specialist, consulting with a doctor from the comfort of your home, or keeping track of your medical history, MediMeet is your trusted healthcare companion.

</p>
     </div>
    </div>
    <div>
      <h1 className='text-2xl font-bold m-5'>WHY CHOSE US</h1>
      <div className='flex flex-col space-y-1.5 justify-center  md:flex-row md:gap-10 md:m-3 lg:m-0'>
        <Card  title="Seamless Access to Care" 
        description="Book appointments with verified doctors and specialists in just a few clicks. Whether it’s a routine check-up or an urgent consultation, MediMeet makes it fast and easy to get the care you need, when you need it."  />
        <Card  title="Secure & Private" 
        description="Your health information is safe with us. We prioritize your privacy with end-to-end encryption and HIPAA-compliant systems to ensure all medical records and consultations are confidential and protected." />
        <Card  title="Convenient & Anywhere" 
        description="Say goodbye to long queues and unnecessary travel. With MediMeet’s online consultation and remote appointment system, you can connect with healthcare providers from the comfort of your home — anytime." />
      </div>
    </div>
    </>
    
  )
}

export default AboutPage