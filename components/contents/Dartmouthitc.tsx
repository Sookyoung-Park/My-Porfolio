import React from 'react'
import Image from 'next/image'

const Dartmouthitc = () => {
  return (
    <div>
    <h3 className="text-2xl font-semibold mt-20 ">UX Research</h3>
      <div className="flex justify-center items-center">
        <Image 
          src="/projects/dartmouth-itc/itc-ux.png" 
          alt="meu-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-20 md:mb-0 h-auto"
        />
      </div>
      <ul className="list-disc pl-8 mt-16">
      <h3 className="text-lg font-semibold mt-24 mb-4">The Challenge</h3>
          <p className="text-sm mt-4 pl-8">
              <li>
                <p className="text-sm font-medium mt-2 mb-2 leading-6">One notable issue is the small font size, particularly when navigating the course listings on the left-hand side. It demands careful attention from users.</p>
              </li>
              <li>
                <p className="text-sm font-medium mt-4 mb-2 leading-6">The "Sort by department" filter feature seems to be present but hasn't been very intuitive or effective.</p>
              </li>
              <li>
                <p className="text-sm font-medium mt-4 mb-2 leading-6">Crosslisted courses, often inundating the interface with multiple department labels (e.g., Chemistry). This can be confusing for users who may not fully comprehend the significance of crosslisting.</p>
              </li>
              <li>
                <p className="text-sm font-medium mt-4 mb-2 leading-6">There's a sentiment that some information, such as term numbers and other perplexing numerical data, may be unnecessary. If these data points are vital, there should be clear explanations provided.</p>
              </li>
              <li>
                <p className="text-sm font-medium mt-4 mb-2 leading-6">Many users express a desire for greater flexibility in presets and filters. Currently, it feels somewhat cumbersome, as you need to navigate back to make changes. It would be more user-friendly if adjustments could be made directly while reviewing the options.</p>
              </li>
          </p>
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
  
      <h3 className="text-lg font-semibold mt-24 mb-4">Hi-Fidelity</h3>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/dartmouth-itc/itc-hifi.png" 
          alt="plateus-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>
    </div>
  )
}

export default Dartmouthitc