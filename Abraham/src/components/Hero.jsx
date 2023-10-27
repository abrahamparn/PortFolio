import Css from './Hero.module.css'
import { gsap } from 'gsap'
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { useAsyncError } from 'react-router-dom';
export default function Hero() {
 
  const app = useRef(); // create a ref for the root level element (for scoping)
  const circle = useRef();
  
  useLayoutEffect(() => {
    
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      
      // Our animations can use selector text like ".box" 
      // this will only select '.box' elements that are children of the component
      gsap.fromTo('.animate', { opacity: 0 }, { opacity: 1, duration: 2 , stagger:0.3})
      // or we can use refs
      
    }, app); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
    
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (

      <section ref={app} className='bg-black_lighter text-white grid grid-cols-1 justify-center md:grid-cols-2 md:items-center md:gap-10 md:p-10 xl:gap-5 xl:p-20'>
      <div className='flex justify-center '>
        <img className="hidden md:flex"src='./src/assets/abraham_radial.png'/>
        <img className="flex md:hidden"src='./src/assets/abraham_kotak.png'/>
      </div>
      <div>
        <div className='flex flex-col gap-3 xl:gap-8 m-5 md:m-1 '>
          <h1 className='animate text-2xl/[2rem] text-left md:text-2xl/[2.5rem] lg:text-4xl/[3rem] xl:text-6xl/[5rem] font-bold font-sen'>I'm Abraham Naibrohu.<br/> A Software Engineer<br/><span className='text-light_gray'>Based in Indonesia.</span></h1>
          <p className='animate'>I'm probably the most passionate programmer you will ever get to work with. If you have a great project that needs some amazing skills, I'm your guy.</p>
      
        </div>
      </div>
      
    </section>
  );
}