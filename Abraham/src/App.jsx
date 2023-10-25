import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './views/HomePage'
import './App.css'
import Navbar from './components/Navbar'
import router from './routing'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {

  return (
    < >
    <Navbar/>
    <RouterProvider router={router} />

    </>
  )
}

export default App
