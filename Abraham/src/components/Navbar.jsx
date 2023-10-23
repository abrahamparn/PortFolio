import Css from './Navbar.module.css'

import React from 'react'

export default function Navbar() {
    function showMenu(){
        console.log("HAI KAMU")
    }
  return (
    <div className=' bg-black font-sen text-bold w-screen'>
        <div className='flex justify-between sm:ms-0 sm:me-0 md:ms-4 md:me-4 lg:ms-12 lg:me-12 xl:ms-20 xl:me-20 text-white'>
            <div className='flex items-center p-6'>
                <p className='font-bold text-lg'>Abraham P.N.</p>
            </div>
            {/* <div className='flex '>

                <div className='flex items-center p-6'><a className='hover:text-yellow_custom'>Experience</a></div>
                <div className='flex items-center p-6'><a className='hover:text-yellow_custom'>Work</a></div>
                <div className='flex items-center p-6'><a className='hover:text-yellow_custom'>Photography</a></div>
                <div className={`${Css.active} flex  items-center p-6`}><a className='hover:text-yellow_custom'>Contact</a></div>

            </div> */}
            <div className="justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul className="flex flex-col md:p-0 md:flex-row m-0 p-0">
                    <li>
                        <a href="#" className="block items-center p-6 hover:text-yellow_custom">Experience</a>
                    </li>
                    <li>
                        <a href="#" className="block items-center p-6 hover:text-yellow_custom">Work</a>
                    </li>
                    <li>
                        <a href="#" className="block items-center p-6 hover:text-yellow_custom">Photography</a>
                    </li>
                    <li className={`${Css.active} hover:bg-black_lighter`}>
                      <a href="#" className="block items-center p-6 hover:text-yellow_custom">Contact</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center justify-between md:hidden p-6' onClick={showMenu}><p>HAI</p></div>
        </div>
    </div>
   
    )
}
