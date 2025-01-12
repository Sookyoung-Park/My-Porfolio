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
          src="/projects/roy-park/roy-park-target.png" 
          alt="roypark-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>
      </ul> 
      
      <h3 className="text-2xl font-semibold mt-32 mb-8">UI Design</h3>
      <h3 className="text-lg font-semibold mt-12 mb-4">Style Guide</h3>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/dartmouth-itc/itc-styleguide.png" 
          alt="meu-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>
      <h3 className="text-lg font-semibold mt-24 mb-4">Grayscale</h3>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/dartmouth-itc/itc-grayscale.png" 
          alt="plateus-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>
    </div>
  )
}

export default Roypark