import React from 'react'
import Image from 'next/image'

const Plateus = () => {
  return (
    <div>
    <h3 className="text-2xl font-semibold mt-20 ">UX Research</h3>
      <h3 className="text-lg font-semibold mt-12 mb-4">The Proposal</h3>
      <div className="flex justify-center items-center">
        <Image 
          src="/projects/plateus/plateus-ux.png" 
          alt="meu-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-20 md:mb-0 h-auto"
        />
      </div>
      <ul className="list-disc pl-8 mt-16">
        <li>
          <strong className="font-medium text-md">The Challenge</strong>
          <p className="text-sm mt-2 mb-8">
          At hand pertains to the inadequacy of college dining services in meeting the diverse dietary and nutritional requirements of busy university students.
          </p>
        </li>
        <li>
          <strong className="font-medium text-md">Key Object</strong>
          <p className="text-sm mt-4">
            <ul className="list-disc pl-8">
              <li>
                <p className="text-sm font-medium mt-2 mb-2">Healthy & Satifying Meal</p>
                <p className="text-sm mt-2 leading-6">The primary objective of "Plateus" is to encourage healthier eating habits among students by offering a wide range of affordable and nutritious food choices.</p>
              </li>
              <li>
                <p className="text-sm font-medium mt-4 mb-2">Experience Diversity & Create a New Culture</p>
                <p className="text-sm mt-2 leading-6">At our core, we are on a mission to cultivate a fresh culture that enhances the overall quality of students' lives. We extend a warm welcome to all students who are determined to elevate the significance of their mealtimes and are committed to embracing a healthier approach to eating..</p>
              </li>
              <li>
                <p className="text-sm font-medium mt-4 mb-2">Simple & Fun User Experience</p>
                <p className="text-sm mt-2 leading-6 mb-8">Our service not only prioritizes user-friendliness but also adds an enjoyable dimension to the experience. Through the download of our app, students can effortlessly elevate their lifestyle, making it both more convenient and healthier. Joining our community has never been easier.</p>
              </li>
            </ul>
          </p>
        </li>
        <li>
          <strong className="font-medium text-md">Target Audience</strong>
          <p className="text-sm mt-2 mb-8">
            It comprises the entire student body at Dartmouth College. Additionally, institutions of higher learning in smaller urban areas stand to gain significant advantages from the implementation of our service.
          </p>
        </li>
      </ul> 
      
      <h3 className="text-lg font-semibold mt-24 mb-4">Flow & Cultural Model</h3>
      <div className="flex justify-center items-center">
        <Image 
          src="/projects/plateus/plateus-ux2.png" 
          alt="plateus-content1"
          width={600}
          height={600}
          className="mt-12 object-cover mb-20 md:mb-0 w-auto"
        />
      </div>
  
      <h3 className="text-lg font-semibold mt-24 mb-4">Persona & Story Board</h3>
      <div className="flex justify-center items-center">
        <Image 
          src="/projects/plateus/plateus-persona.png" 
          alt="plateus-content1"
          width={600}
          height={600}
          className="mt-12 object-cover mb-20 md:mb-0 w-auto "
        />
      </div>
  
      <h3 className="text-lg font-semibold mt-24 mb-4">User Flow</h3>
      <div className="flex justify-center items-center">
        <Image 
          src="/projects/plateus/plateus-flow.png" 
          alt="plateus-content1"
          width={800}
          height={600}
          className="mt-12 object-cover mb-20 md:mb-0 h-auto "
        />
      </div>
      
  
      <h3 className="text-2xl font-semibold mt-32 mb-8">UI Design</h3>
      <h3 className="text-lg font-semibold mt-12 mb-4">Style Guide</h3>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/plateus/plateus-styleguide1.png" 
          alt="meu-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
        <Image 
          src="/projects/plateus/plateus-styleguide2.png" 
          alt="meu-content1"
          width={600}
          height={500}
          className="object-cover mb-20 md:mb-0 h-auto"
        />
      </div>
  
      <h3 className="text-lg font-semibold mt-24 mb-4">Initial Sketch</h3>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/plateus/plateus-initialsketch.png" 
          alt="plateus-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>
  
      <h3 className="text-lg font-semibold mt-24 mb-4">Hi-Fidelity</h3>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/projects/plateus/plateus-mockup.png" 
          alt="plateus-content1"
          width={600}
          height={500}
          className="mt-12 object-cover mb-4 md:mb-0 h-auto"
        />
      </div>
  
      <h3 className="text-lg font-semibold mt-24 mb-4">Prototype</h3>
      <div className="flex justify-center items-center">
        <video 
          src="/projects/plateus/plateus-prototype.mov" 
          controls 
          autoPlay 
          loop 
          className="w-full max-w-[300px] rounded-lg shadow-lg mt-10"
        />
      </div>
    </div>
  )
}

export default Plateus