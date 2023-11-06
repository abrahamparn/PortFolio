import React from "react";

export default function ProjectCard() {
  return (
    <div className="bg-black_lighter">
      <img src="../src/assets/abraham_radial.png" />
      <div className="pb-6 pt-6 ps-5 pe-5 flex flex-col gap-2 font-sen">
        <p className="text-xl text-white font-bold">Tanamin - Android Application</p>
        <p className="text-light_gray">
          An android application that uses machine learning to detect plant
          diseases. I am using Kotlin to create this application.
        </p>
      </div>
    </div>
  );
}
