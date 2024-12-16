"use client";
// import Link from "next/link"
// import {FaFolderOpen} from "react-icons/fa6";
// import { projects } from "@/data";
// import MagicButton from "./ui/MagicButton";
// import { FocusCards } from "./ui/FocusCards";
import { AppleCardsCarousel } from "./ui/AppleCardsCarousel";
// import { TracingBeam } from "./ui/TracingBeam";

const AllProject = () => {
  return (
    <div className="py-36 max-lg:pt-20 max-lg:pb-10">
      {/* <TracingBeam className="mt-20 mb-36"> */}
      <h1 className="heading text-purple max-md:text-2xl text-6xl font-bold">
        Portfolio
      </h1>
      {/* <div className="w-full h-auto gap-6"> */}
      <AppleCardsCarousel />
      {/* </div> */}
      
      {/* <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 ">
      <FocusCards data={projects} />
          <Link href="/project-page">
            <MagicButton
              title="View More Projects"
              icon={<FaFolderOpen />}
              position="right"
            />
        </Link>
      </div> */}
    {/* </TracingBeam> */}
  </div>
  );
};

export default AllProject;