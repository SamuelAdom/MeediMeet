import React from 'react'
import MainLayout from './Layout/MainLayout'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import AllDocsPage from './Pages/AllDocspage'
import ErrorPage from './Pages/ErrorPage'
import AppointmentPage from './Pages/AppointmentPage'
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about-us' element={<AboutPage/>}></Route>
        <Route path='/all-doctors' element={<AllDocsPage/>}></Route>
        <Route path='/all-doctors/:speciality' element={<AllDocsPage/>}></Route>
        <Route path='/appointment/:docId' element={<AppointmentPage/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
          
        

        </Route>
      </Routes>
      

 

    </div>
  )
}

export default App