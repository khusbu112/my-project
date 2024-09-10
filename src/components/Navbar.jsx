
import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  let [show, setShow]= useState(false)
  let handleshow= () =>{
   setShow(!show)
  }
  return (
    <>
    <div className='container mx-auto py-7'>
    <div className="lg:flex lg:justify-between items-center py-4 px-4 lg:px-0  ">
        <div className='lg:w-[30%] '>
        <img src={Logo} alt=''/>
        </div>
     
      <div className='lg:w-[75%]'>
      <ul className={`lg:flex items-center justify-center lg:static absolute transition-all ${show ? 'top-0 right-0 bg-[#FFFFFF] z-50 w-[250px] rounded-tl-[10px]  h-full pl-[30px] pt-[50px] duration-500 shadow-[13px_-3px_37px_0px_#7E33E0]' : 'duration-500 top-0 right-[-250px] w-[250px] h-full bg-none lg:pl-0 pl-[30px] lg:pt-0 pt-[50px] absolute hidden'}`}>
          <li className='font-dm text-[#0D0E43] text-[16px] lg:px-6 py-2 lg:py-0'>Home</li>
          <li className='font-dm text-[#0D0E43] text-[16px] lg:px-6 py-2 lg:py-0'>Page</li>
          <li className='font-dm text-[#0D0E43] text-[16px] lg:px-6 py-2 lg:py-0'>Products</li>
          <li className='font-dm text-[#0D0E43] text-[16px] lg:px-6 py-2 lg:py-0'>Blog</li>
          <li className='font-dm text-[#0D0E43] text-[16px] lg:px-6 py-2 lg:py-0'>Shop</li>
          <li className='font-dm text-[#0D0E43] text-[16px] lg:px-6 py-2 lg:py-0'>Contact</li>
   
        </ul>

      </div>

      <div className="lg:hidden" onClick={() => setShow(!show)}>
                        {show ? <RxCross2 className='text-[#262626] text-[25px] absolute top-[30px] right-[20px] z-50' /> : <FaBars className='text-[#262626] text-[25px]' />}
                    </div>
   
    
        <div className='lg:w-[27%] w-full mt-4 lg:mt-0 relative'>
        <div className="flex items-center justify-between lg:justify-start">
          <input className='outline-none border-[1px] border-[#E7E6EF] lg:w-[280px] w-full h-[35px] bg-[#D9D9D9] ' type='text'/>
          <div className="py-[8px] px-[13px] h-[35px] bg-[#FB2E86] text-white cursor-pointer">
                         <IoSearch />
                        </div>

        </div>
  </div>
        </div>
 
        </div>
    </>
  )
}

export default Navbar
