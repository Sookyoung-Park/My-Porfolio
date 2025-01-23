import React from 'react'
import Image from "next/image";

const Meu = () => {
  return (
    <div className='text-black-100 dark:text-white'>
        <h3 className="text-2xl text-center font-semibold mt-24 leading-10">How might we enhance spontaneous interactions <br/>for long-distance couples?</h3>
    <div className="flex justify-center items-center">
      <Image 
        src="/projects/meu/meu-content-1.png" 
        alt="meu-content1"
        width={600}
        height={500}
        className="mt-16 object-cover mb-20 md:mb-0 h-auto"
      />
    </div>
    <h3 className="text-lg font-semibold mt-20 mb-4">The Proposal</h3>
    <ul className="list-disc pl-8">
      <li>
        <strong className="font-medium text-md">The Challenge</strong>
        <p className="text-sm mt-2 mb-4">
          How might we enhance spontaneous interactions for long-distance couples?
        </p>
      </li>
      <li>
        <strong className="font-medium text-md">Key Object</strong>
        <p className="text-sm mt-2">
          MeU should empower users to have unique and effortless interactions with
          their partners, providing reassurance of love through three distinct
          main features: the Be-Real widget, daily check-in questions, and penguin
          emojis.
        </p>
      </li>
    </ul> 
    
    <h3 className="text-lg font-semibold mt-16 mb-4">Solution</h3>
    <ul className="list-disc pl-8">
      <li>
        <strong className="font-medium text-sm">Streamlined and Effortless Interactions</strong>
      </li>
      <li>
        <strong className="font-medium text-sm">Fun and Distinctive Private Experiences for Couples</strong>
      </li>
      <li><strong className="font-medium text-sm">Intuitively Designed User Interface</strong></li>
    </ul>

    <h3 className="text-2xl font-semibold mt-32 mb-4">Design Process</h3>
    <ul className="list-disc pl-8">
      <li>
        <strong className="font-regular text-lg">Research & Synthesis </strong>
          <p className="pl-8 mt-6 text-sm leading-6">
          <strong className="font-regular text-lg">Research Goal</strong>
          <p className="mt-2">To investigate the approximate size of the current long-distance couple market and explore the areas where existing couple apps fall short. Additionally, to identify the various challenges faced by long-distance couples and uncover their specific needs and preferences.</p>
          </p>
          <h4 className="font-semibold text-lg pl-8 mt-10">User Interview</h4>
          <div className="flex justify-center items-center">
            <Image 
              src="/projects/meu/meu-content-2.png" 
              alt="meu-content1"
              width={600}
              height={500}
              className="mt-12 object-cover mb-20 md:mb-0 h-auto"
            />
          </div>
          <p className="pl-8 mt-12 text-sm leading-6">
          <strong >Key Finding</strong>
          <p className="mt-2">Through interviews, we discovered that more people than expected have experience with long-distance relationships, and they generally share similar challenges. Furthermore, through comparative analysis, we found that existing couple apps are not adequately addressing the issues faced by long-distance couples.</p>
          </p>
          <ul className="list-disc pl-16">
            <li className="mt-4 text-sm">“When engaged in a long-distance relationship, the only means of communication available to us were texting and FaceTime, but over time, we grew weary of these mediums.” - Interviewee A</li>
            <li className="text-sm mt-4">“I wish there were more convenient and quicker means of communication to stay in touch and reassure love” - Interviewee E</li>
            <li className="text-sm mt-4">“I wish there were various means to have deeper and more genuine conversations. The longer we were in a long-distance relationship, the shallower our conversations felt.” - Interviewee K</li>
          </ul>
        </li>

        <h4 className="font-semibold text-lg pl-8 mt-16">Persona & User Journey Map & POV Statement</h4>
        <p className="text-sm pl-8 mt-2 leading-6">In the context of the romantic relationship, I created two personas with diametrically opposite characteristics and developed separate user journey maps for each. However, to maintain the objectivity of the research, I refrained from including photos, names, or gender identifiers. Through this process, I generated different points of view Statements(POVs).</p>
          <div className="flex flex-col justify-center items-center">
            <Image 
              src="/projects/meu/meu-persona.png" 
              alt="meu-content1"
              width={600}
              height={500}
              className="mt-12 object-cover mb-4 md:mb-0 h-auto"
            />
            <Image 
              src="/projects/meu/meu-userjourneymap.png" 
              alt="meu-content1"
              width={600}
              height={500}
              className="object-cover mb-20 md:mb-0 h-auto"
            />
          </div>
          <p className="pl-8 mt-12 text-sm leading-6">
            <h4 className="font-semibold text-lg mt-16">P.O.V Statements</h4>
          </p>
          <ul className="list-disc pl-16">
            <li className="mt-4 text-sm leading-6">An anxious overthinking long-distance relationship partner needs a supportive and interactive app that facilitates seamless communication and spontaneous interaction in order to alleviate anxiety and strengthen the emotional bond with their partner despite the physical distance.</li>
            <li className="text-sm mt-4 leading-6">A busy professional in a long-distance relationship needs a convenient and efficient system that allows for easy sharing of photos and life updates in order to stay connected, feel involved in their partner&apos;s daily life, and maintain a sense of closeness and shared experiences.</li>
          </ul>

          <p className="pl-8 mt-12 text-sm leading-6">
            <h4 className="font-semibold text-lg mt-16">HMW Statements</h4>
          </p>
          <ul className="list-disc pl-16">
            <li className="mt-4 text-sm leading-6">How might we help couples in long distance relationships increase easy, effortless, and spontaneous interactions, utilizing simple design?</li>
            <li className="text-sm mt-4 leading-6">How might we help individuals in long distance relationship grow as single individuals, while levaraging the emotional connection that their bond have to help them feel more delighted on a day-to-day basis?</li>
            <li className="mt-4 text-sm leading-6">How might we foster continuous and positive conversations that are truthful in long-distance relationships?</li>
            <li className="text-sm mt-4 leading-6">How might we make interactions in long-distance relationships easy, enjoyable, and non-demanding, allowing for ongoing emotional exchange?</li>
          </ul>

      <li className="mt-20">
        <strong className="font-regular text-lg">Architecture & UX Design </strong>
        {/*   ceberg Canvas, Value Proposition Canvas */}
        <div className="flex flex-col justify-center items-center">
            <Image 
              src="/projects/meu/meu-Iceberg.png" 
              width={600}
              height={500}
              className="mt-12 object-cover mb-8 md:mb-0 h-auto"
              alt="meu-iceberg canvas"
            />
            <Image 
              src="/projects/meu/meu-value-proposition.png" 
              alt="meu-content1"
              width={600}
              height={500}
              className="object-cover mb-20 md:mb-0 h-auto"
            />
          </div>
      </li>

      <li className="mt-20">
        <strong className="font-regular text-lg">Branding & UI Design</strong>
        {/*  - Crazy 8 (initial Sketch), Grayscale, Low-fidelity, Highmediumity, Style guide */}
        <p className="text-sm mt-4 leading-6">After conducting comprehensive research and analyzing design patterns that align with the information architecture, business objectives, and user requirements, we brainstormed potential solutions. We employed rapid group sketching, utilizing techniques like &apos;Crazy 8&apos; to propel our thoughts and ideas forward, with a primary focus on addressing &apos;HMW(How Might We)&apos; questions within an iterative framework.</p>
        <p className="pl-8 mt-12 text-sm leading-6">
          <h4 className="font-semibold text-lg mt-10">Initial Sketch with Crazy 8 Method</h4>
        </p>
        <div className="flex flex-col justify-center items-center">
          <Image 
            src="/projects/meu/meu-sketch.png" 
            width={600}
            height={500}
            className="mt-10 object-cover mb-8 md:mb-0 h-auto"
            alt="meu initial sketch"
          />
        </div>
        <p className="pl-8 mt-12 text-sm leading-6">
          <h4 className="font-semibold text-lg mt-10">Grayscale</h4>
        </p>
        <div className="flex flex-col justify-center items-center">
          <Image 
            src="/projects/meu/meu-grayscale.png" 
            width={600}
            height={500}
            className="mt-10 object-cover mb-8 md:mb-0 h-auto"
            alt="meu grayscale"
          />
        </div>
        <p className="pl-8 mt-12 text-sm leading-6">
          <h4 className="font-semibold text-lg mt-10">Style Guide</h4>
        </p>
        <div className="flex flex-col justify-center items-center">
          <Image 
            src="/projects/meu/meu-styleguide.png" 
            width={400}
            height={500}
            className="mt-10 object-cover mb-8 md:mb-0 h-auto"
            alt="meu style guide"
          />
        </div>
        <p className="pl-8 mt-12 text-sm leading-6">
          <h4 className="font-semibold text-lg mt-10">Hi-Fidelity</h4>
        </p>
        <div className="flex flex-col justify-center items-center">
          <Image 
            src="/projects/meu/meu-hifi.png" 
            width={600}
            height={500}
            className="mt-10 object-cover mb-8 md:mb-0 h-auto"
            alt="meu hifi"
          />
        </div>
      </li>

      <li className="mt-20">
        <strong className="font-regular text-lg">Prototyping & User Testing</strong>
        <div className="flex justify-center items-center">
          <video 
            src="/projects/meu/meu-prototype.mov" 
            controls 
            autoPlay 
            loop 
            muted
            className="w-full max-w-[240px] rounded-lg shadow-lg mt-10"
          />
        </div>
        <p className="pl-8 mt-12 text-sm leading-6">
            <h4 className="font-semibold text-lg mt-16">Summary of Feedbacks from User Testing</h4>
          </p>
          <ul className="list-disc pl-16">
            <li className="mt-4 text-sm leading-4">“I am absolutely sure it would help foster daily interactions”</li>
            <li className="text-sm mt-4 leading-4">“There are a lot of really good emotions that might be a better way of communicating rather than doing the silent treatment”</li>
            <li className="mt-4 text-sm leading-4">“The check-in questions are fun because they cause actual conversation on a daily basis, which is important for long distance”</li>
          </ul>
          <p className="text-sm pl-8 leading-6 mt-10">Of the five tasks, all participants successfully and promptly completed the task flows. They were all notably impressed by the innovative concepts, visually striking design, and engaging animations.</p>
          
      </li>
    </ul>
      </div>
    
  )
}

export default Meu