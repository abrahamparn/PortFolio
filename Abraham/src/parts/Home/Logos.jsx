import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useReducer, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Logos() {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  let text = "Abraham Pardomuan Naiborhu";
  useGSAP(
    (context, contextSafe) => {
      let tl = gsap.timeline();
      tl.fromTo(
        textRef.current.querySelectorAll("span"),
        {
          x: () => gsap.utils.random(-1000, 1000, 50), // Random x between -1000 and 1000 with steps of 50
          y: () => gsap.utils.random(-200, 200, 50), // Optional: Random y between -200 and 200
          rotate: () => gsap.utils.random(-720, 720, 45), // Optional: Random rotation between -720 and 720 degrees
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          stagger: {
            each: 0.05,
            from: "random",
          },
          repeat: -1,
          yoyo: true,
          delay: 0.5,
          scrollTrigger: {
            trigger: logoRef.current,
            start: "top bottom",
            end: "bottom 30%",
            onEnter: () => tl.play(),
            onLeave: () => tl.pause(),
            onEnterBack: () => tl.play(),
            onLeaveBack: () => tl.pause(),
          },
        }
      );
    },
    { scope: logoRef }
  );
  return (
    <section
      className="overflow-hidden py-3 md:py-8 lg:py-14 xl:py-20 bg-yellow_custom"
      ref={logoRef}
    >
      <p
        className="text-base md:text-3xl lg:text-5xl xl:text-8xl font-italic text-center font-sen text-white"
        ref={textRef}
      >
        {text.split("").map((char, index) => {
          if (char === "\n") {
            return <br key={index} />;
          }
          return (
            <span key={index} className="opacity-1 inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </p>
    </section>
  );
}
