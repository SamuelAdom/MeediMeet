import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { FaCheck, FaInfoCircle } from "react-icons/fa";
import { timeOptions } from "../assets/assets";
import { useUser,useClerk } from '@clerk/clerk-react';
import RelatedDoctors from "../Components/RelatedDoctors";


const AppointmentPage = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [doctorsInfo, setDoctorInfo] = useState(null);
  const [bookSlot, setBookSlot] = useState("MON 10");
  const [selectedTime, setSelectedTime] = useState(null);
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();


  const getDoctorsInfo = () => {
    if (docId) {
      setDoctorInfo(doctors.find((doc) => doc._id === docId));
    }
  };

  useEffect(() => {
    getDoctorsInfo();
  }, [doctors, docId]);


  return (
    doctorsInfo && (
      <>
        {/* Doctor Details */}
        <div className="flex flex-col md:flex md:flex-row lg:flex gap-5 p-5">
          <div className="w-full lg:w-80">
            <img
              className="h-fit bg-blue-400 rounded-2xl"
              src={doctorsInfo.image}
              alt=""
            />
          </div>
          <div className="flex flex-col space-y-2.5 border-1 border-gray-300 shadow-lg p-3 rounded-2xl md:w-200 lg:w-full">
            <h1 className="font-bold text-3xl">
              {doctorsInfo.name}
              <FaCheck className="inline ml-3 bg-blue-600 rounded-full text-2xl w-6 h-fit p-1 text-white" />
            </h1>
            <div className="flex flex-row gap-3 text-lg">
              <p>{doctorsInfo.degree}</p>-<p>{doctorsInfo.speciality}</p>
              <p className="bg-blue-600 text-white px-1.5 rounded-full">
                {doctorsInfo.experience}
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <p>
                About
                <FaInfoCircle className="inline ml-1 text-blue-600 text-lg" />
              </p>
              <p className="w-full leading-7">{doctorsInfo.about}</p>
              <p className="text-lg font-bold">
                Appointment fee: GHS {doctorsInfo.fees}
              </p>
            </div>
          </div>
        </div>

 {/* Booking Slots */}
<div className="flex flex-col items-center px-5 mt-10 space-y-6">
  <h2 className="text-2xl font-semibold text-gray-800">Book an Appointment</h2>

  {/* Day Selection */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 justify-center">
    {Object.keys(timeOptions).map((slot) => (
      <div
        key={slot}
        onClick={() => {
          setBookSlot(slot);
          setSelectedTime(null);
        }}
        className={`cursor-pointer text-center p-3 rounded-lg shadow-sm border text-sm font-medium transition-all duration-300 w-24 h-20 flex flex-col items-center justify-center ${
          bookSlot === slot
            ? "bg-blue-600 text-white border-blue-700 scale-105"
            : "bg-white text-gray-800 hover:shadow-md"
        }`}
      >
        <p className="text-xs">{slot.split(" ")[0]}</p>
        <p className="text-lg font-semibold">{slot.split(" ")[1]}</p>
      </div>
    ))}
  </div>

  {/* Time Selection */}
  {bookSlot && (
    <>
      <h3 className="text-lg font-medium text-gray-700">Available Times</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {timeOptions[bookSlot]?.map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            className={`py-2 px-4 rounded-full border text-sm transition-all ${
              selectedTime === time
                ? "bg-blue-600 text-white border-blue-600 scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </>
  )}

  {/* Confirmation Message */}
  {selectedTime && (
    <div className="text-center text-green-700 font-medium">
      Selected: <span className="font-bold">{bookSlot}</span> at{" "}
      <span className="font-bold">{selectedTime}</span>
    </div>
  )}

  {/* Book Appointment Button - only if signed in */}
  {selectedTime && isSignedIn && (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all"
      onClick={() =>
        alert(`Appointment booked for ${bookSlot} at ${selectedTime}`)
      }
    >
      Book Appointment
    </button>
  )}

  {/* Show login prompt if not signed in */}
  {selectedTime && !isSignedIn && (
    <div className="text-center text-red-600 font-medium">
      Please{" "}
      <span
        onClick={() => openSignIn()}
        className="text-blue-600 underline cursor-pointer"
      >
        Login
      </span>{" "}
      to book an appointment.
    </div>
  )}
  
</div>
<div>
<div className="flex flex-col justify-center text-center mt-20">
  <h1 className="text-2xl font-bold">Top Related Doctors</h1>
  <p className="mt-2 text-lg">Simply browse through our extensive list of trusted doctors.</p>
</div>
  <RelatedDoctors docId={docId} speciality={doctorsInfo.speciality}/>
</div>


      </>
    )
  );
};

export default AppointmentPage;
