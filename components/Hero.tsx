import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/FlipWords";
// import MagicButton from "./ui/MagicButton";
// import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
    {/* spotlight */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      {/* Grid Background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
        // chnage the bg to bg-black-100, so it matches the bg color and will blend in
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
        bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 z-10">
                s00kyoung Park
            </p>
            <FlipWords
              words={["UI Engineer", "UI/UX Designer"]}
              duration={1150}
              className="text-center text-[40px] md:text-5xl lg:text-6xl mt-10"
            />
            {/* Intro words */}
            {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl text-white z-10 mt-12">
              Hi! I&apos;m Sookyoung Park, a UI Engineer/UIUX Designer based in USA and South Korea.
            </p> */}
            {/* Button
            
            -
            +++++*/}
            {/* <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;