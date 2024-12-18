"use client";
import Link from "next/link"
import {FaFolderOpen} from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { FocusCards } from "./ui/FocusCards";

const FeatureProjects = () => {
  return (
    <div className="py-48 max-lg:pt-20 max-lg:pb-10">
      <h1 className="heading text-blue-700 dark:text-purple max-md:text-2xl text-5xl font-bold text-center mb-24">
        Featured Project
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 ">
        <FocusCards />
        <Link href="/project-page">
          <MagicButton
            title="View More Projects"
            icon={<FaFolderOpen />}
            position="right"
          />
        </Link>
      </div>
    </div>
  );
};

export default FeatureProjects;