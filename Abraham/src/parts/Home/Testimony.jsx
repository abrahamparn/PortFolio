import React from "react";
import CardTestimony from "../../components/CardTestimony";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useLayoutEffect, useRef } from "react";

export default function Testimony() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const element = document.querySelector(".sticky");

      gsap.to(element, {
        y: "100%",
        ease: "none",
        scrollTrigger: {
          start: "top 10%",
          end: "2300px 100px",
          pin: true,
          trigger: element,
          markers: true,
          start: "center center",
          toggleActions: "restart pause reverse pause",
        },
      });
    });
    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div>
      <section className="text-white p-5 lg:p-20 py-12 lg:py-20 grid grid-cols-1 gap-8 lg:gap-14 md:grid-cols-2 md:hidden">
        <div className="flex flex-col gap-5 ">
          <div className="">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl xxl:text-8xl font-sen font-bold">
              This is what people say about me
            </h2>
            <p className="text-base md:text-xl/9 lg:text-2xl/10 xl:text-3xl/[50px] xxl:text-6xl/[80px] text-light_gray ">
              Here are a few lines from people who I have worked with for my
              enitire developer journey
            </p>
          </div>
        </div>

        <div className="columns-1 space-y-4 md:space-y-8">
          <CardTestimony />
          <CardTestimony />
          <CardTestimony />
          <CardTestimony />

          <CardTestimony />
        </div>
      </section>
      <section className="text-white p-5 lg:p-20 py-12 lg:py-20  grid-cols-1 gap-8 lg:gap-14 md:grid-cols-2 hidden md:grid">
        <div className="flex flex-col gap-5 ">
          <div className="sticky">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl xxl:text-8xl font-sen font-bold">
              This is what people say about me
            </h2>
            <p className="text-base md:text-xl/9 lg:text-2xl/10 xl:text-3xl/[50px] xxl:text-6xl/[80px] text-light_gray ">
              Here are a few lines from people who I have worked with for my
              enitire developer journey
            </p>
          </div>
        </div>

        <div className="columns-1 space-y-4 md:space-y-8">
          <CardTestimony />
          <CardTestimony />
          <CardTestimony />
          <CardTestimony />

          <CardTestimony />
        </div>
      </section>
    </div>
  );
}
