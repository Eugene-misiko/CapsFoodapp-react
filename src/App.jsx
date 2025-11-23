import Cart from "./Components/Cart"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PlaceOder from "./Components/PlaceOder"
import Footer from "./Components/Footer"
import ExploreMenu from "./Components/ExploreMenu"
import AppDownload from "./Components/AppDownload"
import { useState } from "react"
import Login from "./Components/Login"
import Holdcont from "../AdminComponents/Holdcont"
import NavAdmin from "../AdminComponents/NavAdmin"




function App() {
  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
   
          <div>
          <Holdcont />
         
   
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    
    {/* <div className=" w-[80%] m-auto"> */}
      
       {/* <Navbar setShowLogin={setShowLogin} /> */}
      
       <Routes>  
        
       
         
        
        {/* <Route path="/menu" element={<ExploreMenu/>}/> 
        <Route path="/contuct-us" element={<AppDownload/>}/>
        <Route path="/mobile-app" element={<AppDownload/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOder/>}/> */}
       </Routes>
      </div>
     {/* </div> */}
     <Footer />
    </>
  )
}

export default App
