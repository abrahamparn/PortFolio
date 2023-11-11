import React from "react";
import ProjectCard from "../../components/ProjectCard";

export default function Project() {
  return (
    <section className="p-5 xl:p-10 xxl:p-16 bg-black columns-1  space-y-7 md:columns-4 md:gap-5  xxl:columns-5 xxl:gap-16 md:space-y-10">
      <div>
        <p className="text-sm mb:text-base lg:text-lg xl:text-xl font-bold text-light_gray font-sen ">
          MY PROJECT
        </p>
        <p className="text-3xl mb:text-4xl lg:text-5xl xl:text-6xl font-sen font-bold text-white text-left">
          Projects that I'have done so far
        </p>
      </div>
      <div className="break-inside">
        <ProjectCard />
      </div>
      <div className="break-inside">
        <ProjectCard />
      </div>
      <div className="break-inside">
        <ProjectCard />
      </div>
      <div className="break-inside">
        <ProjectCard />
      </div>
      <div className="break-inside">
        <ProjectCard />
      </div>
      <div className="break-inside">
        <ProjectCard />
      </div>
      <div className="break-inside">
        <ProjectCard />
      </div>
      <div className="break-inside">
        <ProjectCard />
      </div>
      <div className="flex justify-center">
        <button className="text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-3xl text-white font-sen border-yellow_custom border-2 p-2 hover:bg-black_lighter hover:text-yellow_custom">
          View All Project
        </button>
      </div>
    </section>
  );
}
