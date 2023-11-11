import React from "react";
import CardTestimony from "../../components/CardTestimony";

export default function Testimony() {
  return (
    <section className="text-white p-5 lg:p-20 py-12 lg:py-20 grid grid-cols-1 gap-8 lg:gap-14 md:grid-cols-2">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl xxl:text-8xl font-sen font-bold">
          This is what people say about me
        </h2>
        <p className="text-base md:text-xl/9 lg:text-2xl/10 xl:text-3xl/[50px] xxl:text-6xl/[80px] text-light_gray">
          Here are a few lines from people who I have worked with for my enitire
          developer journey
        </p>
      </div>
      <div className="columns-1 space-y-4 md:space-y-8">
        <CardTestimony />
        <CardTestimony />
        <CardTestimony />
        <CardTestimony />

        <CardTestimony />
      </div>
    </section>
  );
}
