'use client';
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import MagicButton from "@/components/ui/MagicButton";
import Footer from "@/components/Footer";
import { IoIosSend } from "react-icons/io";

const About = () => {
  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="flex flex-row items-center justify-center text-center mt-20">
        <img
          src="/p3.svg" 
          alt="Profile Picture"
          className="w-60 h-60 rounded-full object-cover mb-4"
        />
        <div className="flex-col text-left ml-16">
        <h1 className="text-5xl my-6 font-bold text-neutral-800 dark:text-white">Sookyoung Park</h1>
        {/* <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-2">UI/UX Designer & UI Developer</p> */}
        <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mt-4">
          I am a unique combination of a designer and developer with a background in design, art, and computer science.
          My skills range from UI/UX design to implementation, and I have professional experience working in both areas.
        </p>
        <div className="mt-3 relative">
          <MagicButton
              title={"View Resume"}
              icon={<IoIosSend />}
              position="left"
              // handleClick={handleSubmit}
          />
          {/* <button type="submit" onClick={() => handleSubmit()}/> */}
        </div>
        </div>
        
      </div>

      {/* Education Section */}
      <div className="mt-36 w-full mx-auto px-5">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-white mb-6">Education</h2>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between pr-6 pl-6 pb-2">
            <div>
              <h3 className="text-lg font-medium text-neutral-800 dark:text-white mb-2">Dartmouth College</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Master’s in Computer Science - Digital Arts</p>
            </div>
            <div className="mt-2 sm:mt-0">
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">2022 - 2024</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between pr-6 pl-6 pb-2">
            <div>
              <h3 className="text-lg font-medium text-neutral-800 dark:text-white mb-2">Soongsil University</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Bachelor in Information Technology and Design</p>
            </div>
            <div className="mt-2 sm:mt-0">
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">2017 - 2021</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between pr-6 pl-6 pb-4">
            <div>
              <h3 className="text-lg font-medium text-neutral-800 dark:text-white mb-2">Hochschule Furtwangen University</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Digital Communication and Media / Multimedia</p>
            </div>
            <div className="mt-2 sm:mt-0">
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">2019 F/W</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-20 max-w-7xl w-full px-5">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-white mb-6">Skills</h2>
        <div className="grid max-md:grid-cols-1 grid-cols-2 gap-6 justify-center">
          <div className="flex flex-col pr-6 pl-6 pb-2 w-full">
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">UI/UX Design</h3>
            <ul className="text-neutral-600 dark:text-neutral-400 mt-2 list-disc pl-6 space-y-2">
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>User Research</li>
              <li>Usability Testing</li>
            </ul>
          </div>
          <div className="flex flex-col pr-6 pl-6 pb-2 w-full">
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">Web Development</h3>
            <ul className="text-neutral-600 dark:text-neutral-400 mt-2 list-disc pl-6 space-y-2">
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React / React Native</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Git</li>
            </ul>
            <p className="hidden text-neutral-600 dark:text-neutral-400 mt-2">HTML, CSS, JavaScript, React, Next.js, Tailwind CSS</p>
          </div>
        </div>
      </div>


      {/* Footer */}
      <div className="w-full mt-20">
        <FloatingNavbar navItems={navItems} />
        <Footer />
      </div>
    </main>
  );
};

export default About;
