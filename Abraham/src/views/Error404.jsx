import React from "react";
import { Link } from "react-router-dom";
export default function Error404() {
  return (
    <section className="flex items-center justify-center bg-blueGrayish text-white grow">
      <div className=" mx-auto max-w-screen-xl lg:py-16 lg:px-6 text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">
          404
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl">
          Something's missing.
        </p>
        <p className="mb-4 text-lg font-light text-gray-300 dark:text-gray-400">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <Link
          to="/"
          className="inline-flex text-white bg-yellow_custom hover:bg-black_lighter hover:text-yellow_custom active:bg-yellow_custom active:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}
