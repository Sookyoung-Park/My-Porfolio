'use client'
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import MagicButton from "@/components/ui/MagicButton";
import Footer from "@/components/Footer";
// import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data";
import { IoIosDocument } from "react-icons/io";


const About = () => {
  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="flex flex-col md:flex-row items-center justify-center text-center mt-20 space-y-8 md:space-y-0 md:space-x-16">
        <img 
          src="/profile.png" 
          alt="Profile Picture"
          // width={300}
          // height={300}
          className=" object-cover mb-4 md:mb-0 h-[320px] w-[300px]"
        />
      <div className="flex flex-col text-left">
        <h1 className="text-3xl md:text-5xl font-semibold text-neutral-800 dark:text-white mb-6">
          Sookyoung Park
        </h1>
        <p className="text-xs md:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mt-4 leading-6">
          I am a unique combination of a designer and developer with a background in design, art, and computer science.
          My skills range from UI/UX design to implementation, and I have professional experience working in both areas.
        </p>
        <div className="mt-6">
          <Link href="https://drive.google.com/file/d/1UVAyUb04jQqJfIsoXkhSQUWHeZCWZ6tq/view?usp=sharing" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <MagicButton
                title="View Resume"
                icon={<IoIosDocument />}
                position="left"
              />
            </a>
          </Link>
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
