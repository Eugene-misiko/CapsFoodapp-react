import Navbar from "./Components/Navbar"
import { BrowserRouter } from "react-router-dom"



function App() {
 

  return (
    <>
    <div className="w-[80%] m-auto">
      <BrowserRouter>
        <Navbar />
     </BrowserRouter>
     </div>
    </>
  )
}

export default App
