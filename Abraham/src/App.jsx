import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import router from './routing'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {

  return (
    <div className="flex flex-col min-h-screen bg-black">

    <Navbar/>
    <RouterProvider router={router} />

    </div>
  )
}

export default App
