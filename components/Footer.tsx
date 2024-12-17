'use client'
import { socialMedia } from "@/data";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-row max-lg:flex-col max-lg:text-center">
        <h1 className="text-black-200 dark:text-white-200 heading lg:max-w-[40vw] text-2xl font-semibold max-lg:hidden">
          Let's build something to change the world! <br/>
          If you are interested in  <span className="text-blue-700 dark:text-purple">collaboration</span>, <br/>feel free to contact me.
        </h1>

        <h1 className=" text-black-200 dark:text-white-200 heading lg:max-w-[48vw] text-2xl font-semibold lg:hidden xl:hidden 2xl:hidden max-lg:pb-8 max-md:pb-2">
          Let's build something to change the world! <br/>
          If you are interested in  <span className="text-purple">collaboration</span>, 
          <br/>feel free to contact me!
        </h1>

        <div className="flex-1 max-lg:flex-col max-lg:text-center justify-center">
          <ContactForm />
        </div>
      </div>

      <div className="flex mt-40 md:flex-row flex-col justify-between mb-24">
        <p className="text-[12px] md:font-normal font-light dark:text-white text-black-200 max-md:text-center">
          All right reserved by Sookyoung Park
        </p>

        <div className="md:gap-3 gap-6">
          <div className="max-w-7xl w-full px-5 max-md:hidden">
              <ul className="text-neutral-600 dark:text-neutral-400 list-disc space-y-2 text-[14px]">
                <li>Seoul, South Korea</li>
                <li>New York, USA</li>
              </ul>
          </div>
        </div>

        <div className="flex items-center md:gap-3 gap-6  max-md:hidden">
        <div className="max-w-7xl w-full px-5">
              <ul className="text-neutral-600 dark:text-neutral-400 list-disc space-y-2 text-[14px]">
                <li>PROJECT</li>
                <li>RESUME</li>
              </ul>
          </div>
        </div>

        <div className="flex items-center md:gap-3 gap-6 max-md:mt-6 max-md:justify-center">
          {socialMedia.map((info) => (
            <a href={info.link}>
              <div
                key={info.id}
                className="w-9 h-9 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  bg-black-100 dark:bg-black-200/70 rounded-lg border border-black-300/5"
              >
                <img src={info.img} alt="icons" width={24} height={24} />
              </div>
          </a>
            
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;