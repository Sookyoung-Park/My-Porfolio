'use client'
// import { useState } from "react";
// import { IoCopyOutline } from "react-icons/io5";
// import Lottie from "react-lottie";
import { socialMedia } from "@/data";
// import MagicButton from "./ui/MagicButton";
// import animationData from "@/data/confetti.json";
import ContactForm from "./ContactForm";

const Footer = () => {
  // const [copied, setCopied] = useState(false);

  // const defaultOptions = {
  //   loop: copied,
  //   autoplay: copied,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };


  // const handleCopy = () => {
  //   const text = "parksk971031@gmail.com";
  //   navigator.clipboard.writeText(text);
  //   setCopied(true);
  // };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

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
        

        {/* confetti & email copy button */}
        {/* <div className="mt-5 relative">
           <div
            className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
              }`}
          >
            <img src="/confetti.gif" alt="confetti" />
            <Lottie options={defaultOptions} height={200} width={400} />
          </div>

          <MagicButton
            title={copied ? "Email is Copied!" : "Copy my email address"}
            icon={<IoCopyOutline />}
            position="left"
            handleClick={handleCopy}
            otherClasses="!bg-[#161A31]"
          />
        </div> */}
      </div>



      
      <div className="flex mt-40 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-white">
          All right reserved by Sookyoung Park
        </p>

        <div className="flex items-center md:gap-3 gap-6">
              <p className="text-white">
                Location
              </p>
        </div>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={24} height={24} />
            </div>
          ))}
        </div>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a href="https://www.s00kyoung.com">
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
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