'use client'
import React from "react";
import { useTheme } from "next-themes";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div>
      {isDarkMode ? (
        <button
          className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
          onClick={handleClick}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span
            className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
              bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 
              hover:bg-gradient-to-r hover:from-[#2175bf] hover:to-[#8730b5] hover:text-white 
              transition-all ${otherClasses}`}
          >
            {position === "left" && icon}
            {title}
            {position === "right" && icon}
          </span>
        </button>
      ) : (
        <button
          className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
          onClick={handleClick}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span
            className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg 
            bg-white px-7 text-sm font-medium text-black-200 backdrop-blur-3xl gap-2
            hover:bg-gradient-to-r hover:from-[#3a5adc] hover:to-[#393BB2] hover:text-white
            transition-all ${otherClasses}`}
          >
            {position === "left" && icon}
            {title}
            {position === "right" && icon}
          </span>
        </button>
      )}
    </div>
  );
};

export default MagicButton;
