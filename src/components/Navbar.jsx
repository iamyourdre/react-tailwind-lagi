import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "../style";
import {logo, jp, id} from '../assets';
import {navLinks} from '../constants';
import { FaRegUser } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { HiX } from "react-icons/hi";


const Navbar1 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-jkt-light z-50`}>
      <div className={`${styles.boxWidth}`}>
        <nav className="w-full flex justify-between items-center navbar p-0 h-[80px]">
          <img src={logo} alt="jkt48" className="h-full" />
          {/* <article class="text-wrap ps-3 hidden lg:block font-poppins font-medium text-jkt-red">
            <p>JKT48</p>
            <p>Official Website</p>
          </article> */}

            {/* {navLinks.map((nav, index)=>(
              <li key={nav.id} className={`transition duration-300 ease-in-out font-poppins font-normal cursor-pointer text-[16px] px-5 ${index === navLinks.length - 1 ? 'mr-10':''} text-jkt-dark flex h-full ${index === activeNavId ? 'border-b-2 border-jkt-red':''}`} >
                <a href={`#${nav.id}`} className="my-auto">
                  {nav.title}
                </a>
              </li>
            ))} */}
          
          <ul className="list-none md:flex hidden justify-end items-center flex-1 h-full">
            {navLinks.map((nav, index)=>(
              <li key={nav.id} className="h-full">
                <NavLink to={nav.id} className={
                  ({ isActive }) =>
                  isActive ? (`border-b-2 border-jkt-red transition duration-300 ease-in-out font-poppins font-normal cursor-pointer text-[16px] px-5 text-jkt-dark flex h-full ${index === navLinks.length - 1 ? 'mr-10':''}`)
                  :
                  (`transition duration-300 ease-in-out font-poppins font-normal cursor-pointer text-[16px] px-5 text-jkt-dark flex h-full
                  ${index === navLinks.length - 1 ? 'mr-10':''}`) }>
                  <a href={`#${nav.id}`} className="my-auto">
                    {nav.title}
                  </a>
                </NavLink>
              </li>
            ))}
            <li className="font-poppins font-normal cursor-pointer">
              <button type="button" className="py-3 px-4 bg-jkt-red font-poppins font-normal text-[15px] text-jkt-light outline-none rounded-full ease-in duration-200 hover:bg-jkt-dark tooltip tooltip-bottom" data-tip="Login / Register">
                <FaRegUser className="inline"/>
              </button>
            </li>
          </ul>

          <div className="md:hidden flex justify-end items-center">
            {toggle ? (
              <HiX alt="close"
              className="w-[33px] h-[33px] object-contain text-jkt-dark"
              onClick={() => setToggle((prev) => !prev)}/>
            ) : (
              <HiMiniBars3BottomRight alt="menu"
              className="w-[33px] h-[33px] object-contain text-jkt-dark"
              onClick={() => setToggle((prev) => !prev)}/>
            )}

            {/* Navbar Dropdrown */}
            <div className={`${toggle ? 'flex' : 'hidden'} ${styles.paddingX} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
              
              <ul className="mr-4 relative">
                  <FaRegUser className="text-[16px] text-white mt-1 "/>
              </ul>
              <ul className="list-none flex flex-col justify-end items-start flex-1">
                <li className="font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white">
                  <a href='#'>
                    Login
                  </a>
                </li>
                {navLinks.map((nav, index)=>(
                  <li 
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0':'mb-4'} text-white`}
                  >
                    <a href="#">
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        </nav>
        
      </div>
    </div>
  )
}

export default Navbar1