import React from "react";
import abraham_radial from "../assets/abraham_radial_Square.png";
export default function ProjectCard() {
  return (
    <div className="bg-black_lighter ">
      <img src={abraham_radial} className="" />
      <div className="pb-6 pt-6 ps-5 pe-5 flex flex-col gap-2 xl:gap-4 xxl:gap-6 font-sen">
        <p className="text-xl lg:text-2xl xl:text-3xl xxl:text-4xl text-white font-bold">
          Tanamin - Android Application
        </p>
        <p className="text-light_gray lg:text-xl xl:text-2xl xxl:text-3xl">
          An android application that uses machine learning to detect plant
          diseases. I am using Kotlin to create this application.
        </p>
      </div>
    </div>
  );
}
