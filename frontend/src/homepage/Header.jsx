import React from 'react'
import {useDispatch ,useSelector} from 'react-redux'
// import { toggleslider,collapsedSidebar, sliderbarslicePath } from '../slice/sliderbar.slice';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOutOutline } from "react-icons/io5";
import { removeUser } from '../slice/user.slice';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const dispatch = useDispatch();
   const navigate =useNavigate()

   const logout=()=>{
    try {
      localStorage.removeItem("token");
      dispatch(removeUser());
      navigate("/loginguest");
    } catch (error) {
      console.log(error)
    }
   }
  return (
    <>
    <header>
      <nav className='flex justify-between items-center shadow-sm'>
        <div className='logo-name font-serif font-bold text-2xl m-4'>Digital Guest Onboarding System</div>
        <div className='end'>
          <button className='pl-4 m-4' onClick={logout}><IoLogOutOutline size={27} /></button>
        </div>
      </nav>
      <hr/>
    </header>
    </>
  )
}

export default Header
