import { useState, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import router from "./routing";
import Lenis from "@studio-freight/lenis";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
