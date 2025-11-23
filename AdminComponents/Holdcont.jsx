import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import NavAdmin from "../AdminComponents/NavAdmin"
import Sidebar from "../AdminComponents/Sidebar"
import { ToastContainer } from "react-toastify"
import Add from '../src/Pages/Add'
import List from '../src/Pages/List'
import Orders from '../src/Pages/Orders'


const Holdcont = () => {
  return (
    <div>
             <ToastContainer/>
           <NavAdmin/>
           <hr />
           <div className="flex  ">
             <Sidebar/>
          
     
           
       <Routes>  
        
       
         <Route path="/add" element={<Add/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/order" element={<Orders/>}/>
   
       </Routes>
      </div>
    </div>
  )
}

export default Holdcont

