import Cart from "./Components/Cart"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PlaceOder from "./Components/PlaceOder"
import Footer from "./Components/Footer"



function App() {
 

  return (
    <>
    <div className="w-[80%] m-auto">
       <Navbar />
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOder/>}/>
       </Routes>
     
     </div>
     <Footer />
    </>
  )
}

export default App
