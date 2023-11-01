import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../parts/Home/Hero'
import WorkExprience from '../parts/Home/WorkExperience'
import PhilosophyValue from '../parts/Home/PhilosophyValue'
import Skillset from '../parts/Home/Skillset'
export default function Home() {
  return (
    <section className='grow ' >
      {/* <Hero/> */}
      <WorkExprience/>
      <PhilosophyValue/>
      <Skillset/>

    </section>
  )
}