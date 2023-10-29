import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../parts/Home/Hero'
import WorkExperience from '../parts/Home/WorkExperience'
export default function Home() {
  return (
    <section className='grow '>
      <Hero/>
      <WorkExperience/>


    </section>
  )
}