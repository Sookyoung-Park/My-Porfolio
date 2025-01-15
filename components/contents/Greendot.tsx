import React from 'react'
import Image from 'next/image'

const Greendot = () => {
  return (
    <div className='text-black-100 dark:text-white'>
    <h3 className="text-2xl font-semibold mt-20 ">UX Research</h3>
    <h3 className="text-lg font-semibold mt-12 mb-4">Artifact Model & Flow and Cultural Model</h3>
    <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/greendot/greendot-ux-1.png" 
          alt="greendot-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>
      <h3 className="text-lg font-semibold mt-12 mb-4">Persona & Story Board</h3>
    <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/greendot/greendot-ux-2.png" 
          alt="greendot-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>
      
      <h3 className="text-2xl font-semibold mt-32 mb-8">UI Design</h3>
      <h3 className="text-lg font-semibold mb-4">Hi-Fidelity</h3>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/greendot/greendot-hifi.gif" 
          alt="greendot-content1"
          width={1000}
          height={500}
          className="object-cover mb-4 md:mb-0 h-auto"
        />
      </div>
    </div>
  )
}

export default Greendot