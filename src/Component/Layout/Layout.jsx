import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';
export default function Layout() {
  return (<>

 
<nav className="bg-navy ">
  <div className="mx-auto max-w-7xl px-2 py-5 sm:px-6 lg:px-0">
    <div className="relative flex h-16 items-center justify-center">

      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex shrink-0 items-center">
            <Link href="#" className="block rounded-md px-3 py-2 text-3xl font-bold uppercase text-white">Start Framework</Link>
        </div>
        <div className="ms-auto">
          <div className="hidden lg:block flex pt-2 space-x-4">
            <NavLink to="/about" className={({isActive})=>`rounded-md px-3 py-2 text-md font-bold uppercase text-white ${isActive? "bg-teal-400" : ""}`}>About</NavLink>
            <NavLink to="/portfolio" className={({isActive})=>`rounded-md px-3 py-2 text-md font-bold uppercase text-white ${isActive? "bg-teal-400" : ""}`}>portfolio</NavLink>
            <NavLink to="/contact" className={({isActive})=>`rounded-md px-3 py-2 text-md font-bold uppercase text-white ${isActive? "bg-teal-400" : ""} `}>contact</NavLink>
          </div>                                                                                                           
        </div>
      </div>

      <div className="absolute inset-y-0 end-0 flex items-center lg:hidden md:pe-24">
        <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-9 in-aria-expanded:hidden lg:hidden">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-9 not-in-aria-expanded:hidden lg:hidden">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

    </div>
  </div>


  <el-disclosure id="mobile-menu" hidden className="block lg:hidden">
    <div className="flex flex-col text-start space-y-1 ps-11 pt-2 pb-3">
            <NavLink to="/about" className={({isActive})=>`w-fit rounded-md px-3 py-2 text-md font-bold uppercase text-white ${isActive? "bg-teal-400" : ""}`}>About</NavLink>
            <NavLink to="/portfolio" className={({isActive})=>`w-fit rounded-md px-3 py-2 text-md font-bold uppercase text-white ${isActive? "bg-teal-400" : ""}`}>portfolio</NavLink>
            <NavLink to="/contact" className={({isActive})=>`w-fit rounded-md px-3 py-2 text-md font-bold uppercase text-white ${isActive? "bg-teal-400" : ""} `}>contact</NavLink>
    </div>
  </el-disclosure>
</nav>
{/*=====================================================================================================*/}
    <Outlet/>
{/*=====================================================================================================*/}
        <footer className='bg-navy text-white'>
      <div className="container mx-auto px-10 md:px-3">
          <div className='py-20 md:py-16 px-9 bg-transparent grid grid-cols-1 md:grid-cols-3 gap-3'>

            <div className='px-2 py-5 col-span-1'>
              <h3 className='font-medium md:text-3xl text-2xl pb-4'>LOCATION</h3>
              <p className='pb-4'>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
              
              <div className='px-2 py-5 col-span-1'>
                <h3 className='font-medium md:text-3xl text-2xl pb-4'>AROUND THE WEB</h3>
                <ul className='flex justify-center gap-4'>
                  <li className='p-1 border-1 rounded-full'>
                    <i className='fa-brands fa-facebook text-lg'></i>
                  </li>
                  <li className='p-1 border-1 rounded-full'>
                    <i className='fa-brands fa-twitter text-lg'></i>
                  </li>
                  <li className='p-1 border-1 rounded-full'>
                    <i className="fa-brands fa-linkedin-in text-lg"></i>
                  </li>
                  <li className='p-1 border-1 rounded-full'>
                    <i className="fa-solid fa-globe text-lg"></i>
                  </li>
                </ul>
              </div>
              
              <div className='px-2 py-5  col-span-1'>
                <h3 className='font-medium md:text-3xl text-2xl pb-4'>ABOUT FREELANCER</h3>
                <p className=''>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>

          </div>
      </div>

      <div className='bg-dark-navy p-6 '>
        <p>Copyright © Your Website 2021</p>
      </div>
    </footer>

  </>)
}
