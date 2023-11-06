import React from 'react'
import ProjectCard from '../../components/ProjectCard'

export default function Project() {
  return (
    <section className='p-5 bg-black ProjectCard'>
        <div>
            <p className='text-sm font-bold text-light_gray font-sen'>MY PROJECT</p>
            <p className='text-3xl font-sen font-bold text-white text-left'>Projects that I'have done so far</p>
        </div>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
    </section>
  )
}
