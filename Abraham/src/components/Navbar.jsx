import Css from './Navbar.module.css'

import React, {useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap';

export default function Navbar() {


    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { fontSize: '2rem', backgroundColor:'black', duration:0.2});
    };
      
    const onLeave = ({ currentTarget }) => {
        gsap.timeline().to(currentTarget, {  fontSize: '1rem', backgroundColor:'black', duration:0.2})
        .to('.active', {backgroundColor: "#FF8A00", duration: 0.2});
    };

    const [showNavBarSmall, setShowNavBarSmall] = useState(false)
    const app = useRef();
    const tl = useRef(null);
    function showMenu() {
       
        console.log('clicked')
        if(!tl.current){
            animate()
        }else{
            tl.current.reversed(!tl.current.reversed())
        }
    }   

    const animate = () =>{
        if(showNavBarSmall === false){
            console.log('false')
            tl.current = gsap.timeline()
            tl.current
                .fromTo('.toBeAnimated',  { opacity: 0, zIndex:-1 }, { opacity: 1, duration: 0.5, zIndex:50 })
                .from('.insertIntoAnimation', {x: 1000, ease:"power1.out", stagger:0.3})
                .fromTo('.active', {backgroundColor: "bg-black"}, {backgroundColor: "#FF8A00", duration: 0.2});
            setShowNavBarSmall(!showNavBarSmall); // Update the state after the animation
                // .from('.randomInsert', {x:random(-1000, 0)})
        }else if(showNavBarSmall === true){
            console.log('false')
            tl.current = gsap.timeline({
                onComplete: () => {
                    setShowNavBarSmall(!showNavBarSmall); // Update the state after the animation
                },
            });
    
            tl.current
            .fromTo('.toBeAnimated',  { opacity: 0, zIndex:-1 }, { opacity: 1, duration: 0.5, zIndex:50 })
            .from('.insertIntoAnimation', {x: 1000, ease:"power1.out", stagger:0.3})
            .fromTo('.active', {backgroundColor: "bg-black"}, {backgroundColor: "#FF8A00", duration: 0.2});

        }
    }

  return (
    <>
        <div className=' bg-black font-sen text-bold w-screen'>
            <div className='flex justify-between sm:ms-0 sm:me-0 md:ms-4 md:me-4 lg:ms-12 lg:me-12 xl:ms-20 xl:me-20 text-white'>
                <div className='flex items-center p-6'>
                    <p className='font-bold text-lg'>Abraham P.N.</p>
                </div>
    
                <div className="justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col md:p-0 md:flex-row m-0 p-0">
                        <li >
                            <a href="#" className="block items-center p-6 hover:text-yellow_custom rand">Experience</a>
                        </li>
                        <li >
                            <a href="#" className="block items-center p-6 hover:text-yellow_custom">Work</a>
                        </li>
                        <li >
                            <a href="#" className="block items-center p-6 hover:text-yellow_custom">Photography</a>
                        </li>
                        <li className={`${Css.active} hover:bg-black_lighter `}>
                        <a href="#" className="block items-center p-6 hover:text-yellow_custom">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center justify-between md:hidden p-6 openAnimation' onClick={showMenu}><span className='text-white text-xl'>☰</span></div>
                
            </div>
        </div>
        <div className={`toBeAnimated bg-black flex flex-col font-sen text-bold w-screen fixed top-0 left-0 h-screen  md:hidden ${showNavBarSmall? " ":"hidden"}`}> 

            <div className='flex flex-row justify-between'>
                <div className='flex items-center p-6'>
                    <p className='font-bold text-lg text-yellow_custom'>Abraham P.N.</p>
                </div>
                <div className='flex items-center justify-between md:hidden p-6' onClick={showMenu}><span className='text-yellow_custom text-xl '>☰</span></div>
            </div>
            <div className="justify-between  w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col md:p-0 md:flex-row m-0 p-0">
                        <li className={`${showNavBarSmall? " ":"hidden"} insertIntoAnimation`} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                            <a href="#" className="block items-center p-6 hover:text-yellow_custom text-white">Experience</a>
                        </li>
                        <li className={`${showNavBarSmall? " ":"hidden"} insertIntoAnimation`} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                            <a href="#" className="block items-center p-6 hover:text-yellow_custom text-white">Work</a>
                        </li>
                        <li className={`${showNavBarSmall? " ":"hidden"} insertIntoAnimation`} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                            <a href="#" className="block items-center p-6 hover:text-yellow_custom text-white">Photography</a>
                        </li>
                        <li className={`active hover:bg-black_lighter insertIntoAnimation`} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                            <a href="#" className="block items-center p-6 hover:text-yellow_custom text-white">Contact</a>
                        </li>
                    </ul>
                </div>
        </div>
    </>

   
    )
}
