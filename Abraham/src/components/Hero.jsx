import Css from './Hero.module.css'
import { gsap } from 'gsap'
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { useAsyncError } from 'react-router-dom';
export default function Hero() {
    const [reversed, setReversed] = useState(false);
    const app = useRef();
    const tl = useRef();
  
    const animate = () => {
      console.log("creating timeline");
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap.timeline()
        .to(".box", {
          rotation: 360
        })
        .to(".circle", {
          x: 100,
          ease: "power1.out",
        })
        .to(".circle", {
            x: 0,
            ease: "power1.out",
          })
    }
  
    return (
      <div className='flex items-center justify-center m-6 flex-col app' ref={app}>
        <div>
          <button onClick={animate}>Toggle</button>
        </div>
        <p className='text-center p-6 m-6 bg-green_custom rounded-full circle'>Hai</p>
        <div className="box" >Hello</div>
      </div>
    );
  }