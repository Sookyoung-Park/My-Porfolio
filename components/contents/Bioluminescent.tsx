import React from 'react'
import Image from 'next/image'

const Bioluminescent = () => {
  return (
    <div>
    <h3 className="text-2xl font-semibold mt-20 mb-4">Design Process</h3>
    <p className="text-sm font-medium leading-6 mt-2 mb-4">
    The game will feature a realistic and immersive atmosphere, with realistic lighting and sound effects, that are inspired by the movie "Avatar". The game will be designed in a way that allows players to interact with the environment in a natural and intuitive way.
    </p>
      <ul className="list-disc mt-16">
      <h3 className="text-lg font-semibold mt-24 mb-4">Initial Terrian Sketch</h3>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/bioluminescent/bio-sketch.png" 
          alt="bio-content1"
          width={700}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>

      <h3 className="text-lg font-semibold mt-24 mb-4">White-Box</h3>
      <p className="text-sm font-medium leading-6 mt-2 mb-4">
      In order to create a immersive design, I wanted to create a more flexible and naturalistic terrian desing instead of default regular terrain. This involved utilizing the ocean at two edges of the terrain, which helped to create a more organic overall form. The project was inspired by the movie "Avatar", I also incorporated floating islands in the sky to further enhance the "Avatar" atmosphere in the game.
      </p>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/bioluminescent/bio-terrain-1.png" 
          alt="bio-content1"
          width={700}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
        <Image 
          src="/projects/bioluminescent/bio-terrain-3.png" 
          alt="bio-content1"
          width={700}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
        <Image 
          src="/projects/bioluminescent/bio-terrain-2.png" 
          alt="bio-content1"
          width={700}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>

      <h3 className="text-lg font-semibold mt-24 mb-4">Lighting & Shade</h3>
      <p className="text-sm font-medium leading-6 mt-2 mb-4">
      I have increased the emissiveness of the water color to improve the player's visibility in the environment, especially during nighttime or in dark areas with low lighting.
      </p>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/bioluminescent/bio-water-1.png" 
          alt="bio-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
        <Image 
          src="/projects/bioluminescent/bio-water-2.png" 
          alt="bio-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>

      <h3 className="text-lg font-semibold mt-24 mb-4">Final Terrain Design</h3>
      <p className="text-sm font-medium leading-6 mt-2 mb-4">
      I have increased the emissiveness of the water color to improve the player's visibility in the environment, especially during nighttime or in dark areas with low lighting.
      </p>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/bioluminescent/bio-final-1.png" 
          alt="bio-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
        <Image 
          src="/projects/bioluminescent/bio-final-2.png" 
          alt="bio-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>

      <h3 className="text-lg font-semibold mt-24 mb-4">Particle System & VFX</h3>
      <p className="text-sm font-medium leading-6 mt-2 mb-4">
      To further enhance the visual immersion and vibrancy of the game, I incorporated various particle systems and VFX. One notable example is the use of VFX for the portal in the game, which significantly elevates the overall design quality.
      </p>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/bioluminescent/bio-particle.png" 
          alt="bio-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
        <Image 
          src="/projects/bioluminescent/bio-vfx-1.png" 
          alt="bio-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>

      <h3 className="text-lg font-semibold mb-4 mt-32">Prototype / Demo</h3>
      <div className="flex flex-col justify-center items-center">
      <video 
          src="/projects/bioluminescent/bio-demo.mp4" 
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

export default Bioluminescent