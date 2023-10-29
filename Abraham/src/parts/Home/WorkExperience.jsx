import React from 'react'

export default function WorkExperience() {
  return (
    <section className='flex flex-col px-5 py-16 md:px-10 lg:px-14 xl:px-20 font-sen text-white'>
        <p className="text-light_gray text-base md:text-xl">WORK EXPERIENCE</p>
        <p className=' text-3xl md:text-4xl font-bold font-sen'>Experience that I have gained so far.</p>


          <div className=' py-10 flex flex-col lg:flex-row gap-16'>
            <div className='flex flex-col gap-2'>
              <img className='w-32' src='../../src/assets/numbers/01.png'/>
              <h2 className='text-xl md:text-2xl font-bold '><span className='text-green_custom'>Mattel</span>, Software Engineer Intern</h2>
              <p className='text-sm md:text-base'>Created and maintained internal softwares using vb.net, electron.js, asp.net mvc (c# and vb), python, ssms, microsoft power technologies, etc. </p>
            </div>
            <div className='flex flex-col gap-2'>
              <img className='w-32' src='../../src/assets/numbers/02.png'/>
              <h2 className='text-xl md:text-2xl  font-bold '><span className='text-blue_custom'>Tanamin</span>, Co-founder and mobile developer</h2>
              <p className='text-sm md:text-base'>Co-founded the startup and served as the mobile developer with funding from both Google and the government, totaling IDR 140 million.</p>
            </div>
            
            <div className='flex flex-col gap-2'>
              <img className='w-32' src='../../src/assets/numbers/03.png'/>
              <h2 className='text-xl md:text-2xl  font-bold '><span className='text-yellow_custom'>Bangkit Academy</span>, Android Learning path</h2>
              <p className='text-sm md:text-base'>Selected from 63k+ applicants to join Bangkit Academy 2022 in the Mobile Development learning path. Graduated with distinction with score of 98.5.</p>
            </div>
          </div>
       
      
    </section>
  )
}
