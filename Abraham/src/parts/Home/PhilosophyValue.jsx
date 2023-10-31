import React from 'react'
import { Link } from 'react-router-dom'

export default function PhilosophyValue() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 '>
        <div className='bg-peach_custom px-8  flex flex-col justify-between gap-20 md:gap-10'>
            <div>
                <h2 className=' text-left text-[32px] font-bold pt-11'>Philosophy & Values</h2>
                <p className='text-dark_gray pt-4 '>I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>
            </div>
            <div className='pb-10'>
                <Link className='underline underline-offset-[15px] '>More About Me</Link>

            </div>
        </div>
        <img src='../src/assets/doomsday.jpg' className="object-cover h-auto w-full md:h-80 xl:h-96 xl:w-full"/>

    </section>
  )
}
