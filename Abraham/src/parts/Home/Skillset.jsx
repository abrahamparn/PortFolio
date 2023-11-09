import React from "react";
import kotlin from "../../assets/skillset/kotlin.svg";
import net from "../../assets/skillset/net.svg";
import node from "../../assets/skillset/node.svg";
export default function Skillset() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-5 xl:gap-x-10 text-sen gap-y-10 text-white py-12 px-5">
      <div className=" md:row-span-3 flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Skillset</h2>
        <p className="text-sm text-light_gray">
          I could do a lot of things. Be it Android application, ASP.NET MVC,
          VB.NET, Electron JS, Machine Learning models, MERN. I have made a lot
          of projects and currently I am a backend developer. I am the perfect
          person to hire when it comes to a full fledged project. Whatever your
          needs are, I can pretty much take on any challenge.
        </p>
      </div>

      <div className="Android">
        <img src={kotlin} className="h-8 mb-3" />
        <h2 className="text-2xl mb-1">Android Development</h2>
        <p className="text-sm text-light_gray">
          Working with Tanamin has taught me how to create Android applications
          using Kotlin. I have also publish the application into the play store.
        </p>
      </div>

      <div className="MERN">
        <img src={node} className="h-8 mb-3" />
        <h2 className="text-2xl mb-1">Javascript Fullstack</h2>
        <p className="text-sm text-light_gray">
          Working with waktumerenung provides me with a lot of insights on how
          to create project using MERN!
        </p>
      </div>

      <div className=".NET">
        <img src={net} className="h-8 mb-3" />
        <h2 className="text-2xl mb-1">.NET Developer</h2>
        <p className="text-sm text-light_gray">
          Working with Mattel has taught me on how to create asp.net mvc project
          and vb.net projects
        </p>
      </div>
    </section>
  );
}
