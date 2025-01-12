import React from 'react'
import Image from 'next/image'

const Orbit = () => {
  return (
    <div>
        <h3 className="text-2xl font-semibold mt-20 ">Style Guide</h3>
        <div className="flex justify-center items-center">
            <Image 
            src="/projects/orbit/orbit-styleguide.png" 
            alt="meu-content1"
            width={600}
            height={500}
            className="mt-12 object-cover mb-20 md:mb-0 h-auto"
            />
        </div>

        <h3 className="text-2xl font-semibold mt-20 ">Hi-Fidelity</h3>
        <div className="flex justify-center items-center">
            <Image 
            src="/projects/orbit/orbit-hifi.png" 
            alt="meu-content1"
            width={600}
            height={500}
            className="mt-12 object-cover mb-20 md:mb-0 h-auto"
            />
        </div>
    </div>
  )
}

export default Orbit