"use client";

import {FaFolderOpen} from "react-icons/fa6";
import { projects } from "@/data";
import MagicButton from "./ui/MagicButton";
import { FocusCards } from "./ui/FocusCards";

const FeatureProjects = () => {
  return (
    <div className="py-36 max-lg:pt-20 max-lg:pb-10">
      <h1 className="heading text-purple max-md:text-2xl text-4xl text-bold text-center">
        Featured Project
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 ">
      <FocusCards data={projects} />
         <a href="test">
          <MagicButton
            title="View More Projects"
            icon={<FaFolderOpen />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default FeatureProjects;