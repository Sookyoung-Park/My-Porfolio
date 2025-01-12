import React from 'react'
import Image from 'next/image'

const RevivingViva = () => {
  return (
    <div>
      <ul className="list-disc mt-16">
      <h3 className="text-lg font-semibold mt-24 mb-4">Process</h3>
          <p className="text-sm mt-4">
            <p className="text-sm font-medium mt-2 mb-2 leading-6">The structure of Coldplay's "Viva La Vida" has a repetitive nature with a consistent rhythm, which made it suitable for generating high-quality music using Jukebox. The learning model was able to implement repetition quite effectively, which was a successful aspect of the process. However, since the quality of the generated music varied significantly with each iteration, there was no guarantee of consistently achieving successful iterations. It was observed that generating more than three samples at once resulted in significantly lower quality, so it was preferable to generate 1-2 iterations at a time.
            Furthermore, the music files contained a considerable amount of noise, resulting in poor audio quality. Removing the noise and seamlessly connecting each section without noticeable transitions required a significant amount of time and effort.
            </p>
          </p>
      </ul> 
    </div>
  )
}

export default RevivingViva