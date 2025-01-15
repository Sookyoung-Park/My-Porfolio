import React from 'react'
import Image from 'next/image'

const Cellwars = () => {
  return (
    <div className='text-black-100 dark:text-white'>
    <h3 className="text-xl font-semibold mt-20 ">Responsibility</h3>
    <p className="text-sm font-medium mb-2 mt-6 leading-6">
    My responsibilities involved generating innovative and impactful ideas for the environment design and creating compelling visuals that aligned with the project's goals. I also ensured that the environment was optimized for efficiency and functionality, making it easy for users to interact with and navigate. Additionally, I designed the user's hand to provide a seamless and intuitive experience, and I animated the environment to bring it to life and enhance the user's engagement. Overall, my contributions were critical to the success of the project, and I am proud of the results we achieved through my efforts.
    </p>
      
      <h3 className="text-2xl font-semibold mt-32 mb-8">Design Process</h3>
      <p className="text-sm font-medium mb-2 mt-6 leading-6">
      The game will feature a realistic and immersive atmosphere, with realistic lighting and sound effects, that are inspired by the movie "Avatar". The game will be designed in a way that allows players to interact with the environment in a natural and intuitive way.
      </p>
      <h3 className="text-lg font-semibold mt-12 mb-4">Ideation & Sketch</h3>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/cell-war/cellwar-sketch.png" 
          alt="cellwar-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>
      <p className="text-sm font-medium mb-2 mt-6 leading-6">
      I created a environment that would represent the inside of the human body. The primary objective was to craft an organic atmosphere that would accurately reflect the complexity and intricacy of the cell-world we were aiming to simulate. Rather than relying on traditional shapes like spheres or cubes, the design is foucsed on leveraging negative space to create a unique design. By incorporating negative space in between spheres, an innovative design was intended to convey the organic nature of the environment to users. The approach resulted in a highly engaging and immersive environment that effectively represented the cell-world and exceeded the project's goals.
      </p>
      <h3 className="text-lg font-semibold mt-24 mb-4">Initial Sketch / White-Scale</h3>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/cell-war/cellwar-whitebox.png" 
          alt="plateus-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>
  
      <h3 className="text-lg font-semibold mt-24 mb-4">Hi-Fidelity (Before Optimizing the Frame Rate)</h3>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/cell-war/cellwar-hifi-1.png" 
          alt="cellwar-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
        <Image 
          src="/projects/cell-war/cellwar-hifi-2.png" 
          alt="cellwar-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
        <Image 
          src="/projects/cell-war/cellwar-hifi-3.png" 
          alt="cellwar-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>

      <h3 className="text-lg font-semibold mt-24 mb-4">Hi-Fidelity (After Optimizing the Frame Rate)</h3>
      <p className="text-sm font-medium mb-2 mt-6 leading-6">
        I implemented several strategies to optimize frame rates and tris. Firstly, I used polygon shapes instead of spheres, as polygons are more efficient and require fewer tris. Secondly, I opted for solid textures for the environment, as this minimized the number of pixels that needed to be rendered, leading to better performance. Additionally, I reduced the use of transparency and emission, as these effects require more resources to render and can significantly impact frame rates. Lastly, I removed the Fernsel effect, which is known to have a significant impact on performance, while also providing little added value to the project's overall visual appeal. By employing these strategies, I was able to achieve a significant improvement in the project's frame rates and tris.
      </p>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/cell-war/cellwar-moneyshot-1.png" 
          alt="cellwar-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
        <Image 
          src="/projects/cell-war/cellwar-moneyshot-2.png" 
          alt="cellwar-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
        <Image 
          src="/projects/cell-war/cellwar-moneyshot-3.png" 
          alt="cellwar-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>
      
      <h3 className="text-lg font-semibold mt-24 mb-4">Prototype / Demo</h3>
      <div className="flex justify-center items-center">
          <video 
            src="/projects/cell-war/cellwar-demo.mp4" 
            controls 
            autoPlay 
            loop 
            muted
            className="w-full max-w-[600px] rounded-lg shadow-lg mt-10"
          />
        </div>
    </div>
  )
}

export default Cellwars