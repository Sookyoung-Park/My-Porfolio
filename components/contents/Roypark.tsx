import React from 'react'
import Image from 'next/image'

const Roypark = () => {
  return (
    <div>
    <h3 className="text-2xl font-semibold mt-20 ">Design Process</h3>
      <ul className="list-disc pl-8 mt-8">
      <h3 className="text-lg font-semibold mb-4">Initial Sketch</h3>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/roy-park/roy-park-sketch.png" 
          alt="roypark-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>
      <h3 className="text-lg font-semibold mb-4 mt-32">UV Mapping & Texturing</h3>
      <p className="text-sm mt-2 mb-8">
      My main focus was to create textures that captured the iconic pop art style of Roy Lichtenstein. I dedicated a significant amount of time to modeling and accurately UV mapping the artwork to ensure that the textures were applied with precision and authenticity, effectively capturing the essence of the original pattern.
      </p>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/roy-park/roy-park-uv.png" 
          alt="roypark-content1"
          width={800}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>
      <h3 className="text-lg font-semibold mb-4 mt-32">Target Image Design</h3>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/roy-park/roy-park-target.png" 
          alt="roypark-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>
      <h3 className="text-lg font-semibold mb-4 mt-32">Hi-Fidelity</h3>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/roy-park/roy-park-hifi-2.png" 
          alt="roypark-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
        <Image 
          src="/projects/roy-park/roy-park-hifi-1.png" 
          alt="roypark-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>
      <h3 className="text-lg font-semibold mb-4 mt-32">Prototype / Demo</h3>
      <div className="flex flex-col justify-center items-center">
      <video 
          src="/projects/roy-park/roy-park.mp4" 
          controls 
          autoPlay 
          loop 
          muted
          className="w-full max-w-[600px] rounded-lg shadow-lg mt-10"
        />
      </div>
      </ul> 
    </div>
  )
}

export default Roypark