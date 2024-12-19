'use client'

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/AuroraBackground";
import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/FlipWords";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div>
      {isDarkMode ?(
        <div className="pb-56 pt-56">
          <div>
            {/* light blue */}
            <Spotlight
              className="-top-60 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="#3E8EF9"
            />
            {/* green */}
            <Spotlight
              className="h-[80vh] w-[80vw] top-25 left-full"
              fill="#36D9B6"
            />
            {/* dark blue */}
            <Spotlight className="left-80 top-28 h-[90vh] w-[50vw]" fill="#3D40F8" />
          </div>
          <div
            className="h-screen w-full bg-black-100 bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center"
          >
            <div
              className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100
              [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
              />
          </div>
            <div className="flex justify-center">
              <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 z-10">
                    s00kyoung Park
                </p>
                <FlipWords
                  words={["UI ENGINEER", "UI/UX DESIGNER"]}
                  duration={1150}
                  className="text-center text-[40px] md:text-5xl lg:text-6xl mt-10"
                />
            </div>
          </div>
        </div>
      ):(
        <AuroraBackground className="h-[80vh]">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              duration: 3.5,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center"
          >
            <div className="flex justify-center">
              <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <p className="uppercase tracking-widest text-xs text-center text-blue-500 max-w-80 z-10">
                  S00kyoung Park
                </p>
                <FlipWords
                  words={["UI Engineer", "UI/UX Designer"]}
                  duration={1150}
                  className="text-center text-[40px] md:text-5xl lg:text-6xl mt-10"
                />
              </div>
            </div>    
          </motion.div>
        </AuroraBackground>
      )}
    </div>
  );
};

export default Hero;