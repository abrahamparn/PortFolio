import { useState, useEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import router from './routing'
import Lenis from '@studio-freight/lenis'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

  }, []);

  return (
    <div className="min-h-screen bg-black">

    <Navbar/>
    <RouterProvider router={router} />

    </div>
  )
}

export default App
