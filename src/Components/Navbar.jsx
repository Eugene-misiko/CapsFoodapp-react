import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import basket_icon from '../assets/basket_icon.png';
import search_icon from '../assets/search_icon.png';
import { Link } from 'react-router-dom';
import { StoreContext } from './Store';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);

  const isActive = (link) => menu === link ? 'border-b-2 border-[#49557e] pb-[2px]' : 'pb-[2px]';

  return (
    <div className="py-5 flex justify-between items-center">
     <Link onClick={isActive('/')} to='/'><img src={logo} alt="Logo" className='w-[150px]' /></Link> 
      
      <div className="flex text-grey-500 gap-5 text-xl">
        
          <Link 
            onClick={() => setMenu("home")} 
            className={isActive("home")}
            to='/'
           >
            Home
           </Link>
        
          <Link 
            onClick={() => setMenu("menu")} 
            className={isActive("menu")}
            to='/menu'
           >
            Menu
          </Link>
  
          <Link 
            onClick={() => setMenu("mobile-app")} 
            className={isActive("mobile-app")}
            to='/mobile-app'
          >
            Mobile-app
          </Link>
        
          <Link 
            onClick={() => setMenu("contuct-us")} 
            className={isActive("contuct-us")}
            to='/contuct-us'
          >
            Contact us
           </Link>
        
          </div>

            <div className="flex items-center gap-10 text-base">
            <img src={search_icon} alt="Search" />
            <div className='relative'>
            <Link to='/Cart'><img className='' src={basket_icon} alt="Basket" /></Link>
            <div
            className={
            getTotalCartAmount() === 0
            ? ""
            : "absolute min-w-[10px] min-h-[10px] bg-red-500 rounded-[5px] top-[-8px] right-[-8px]"
            }
            ></div>

            </div>
            <button className="
              bg-transparent 
              text-[#49557e] 
              border border-red-500 
              px-4 py-2 
              rounded-xl 
              cursor-pointer 
              hover:bg-[#fff4f2] 
              transition 
              duration-300 
              font-medium"
              onClick={()=>setShowLogin(true)} >
              Sign in
            </button>

        
      </div>
    </div>
  );
}

export default Navbar;

