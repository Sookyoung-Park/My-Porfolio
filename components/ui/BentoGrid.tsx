'use client'
import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";
import { BackgroundGradientAnimation } from "../GradientBg";
import { BackgroundGradientAnimationLight } from "../GradientBg-light";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  imgClassName,
  titleClassName,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imgClassName?: string;
  titleClassName?: string;
}) => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const techStackLeft = ["ReactJS","ReactJS","Typescript","Javascript"];
  const techStackRight = ["HTML", "CSS"];

  const lightModeStyle = {
    background: "rgb(250, 250, 250)",
    backgroundColor: "linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(220,220,220,1) 100%)",
  };

  const darkModeStyle = {
    background: "rgb(4,7,29)",
    backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={isDarkMode ? darkModeStyle : lightModeStyle}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute"/>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
        </div>
        {id === 1 && (
        isDarkMode ? (
          <BackgroundGradientAnimation>
            <Link href="/about">
              <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 cursor-pointer text-3xl text-center md:text-4xl lg:text-7xl" />
            </Link>
          </BackgroundGradientAnimation>
        ) : (
          <BackgroundGradientAnimationLight>
            <Link href="/about">
              <div className="absolute z-50 inset-0 flex items-center justify-center !text-black-200 font-bold px-4 cursor-pointer text-3xl text-center md:text-4xl lg:text-7xl" />
            </Link>
          </BackgroundGradientAnimationLight>
        )
      )}


        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
          className={id===1 ? `font-sans text-xl lg:text-3xl max-w-96 font-bold z-10 text-white` : `font-sans text-xl lg:text-3xl max-w-96 font-bold z-10  text-black-200 dark:text-white-100`}
          >
            {title}
          </div>
          
          {/* Tech stack */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-4">
                {techStackLeft.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] text-white-200"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-4">
                <span className="lg:py-5 lg:px-3 py-4 px-3  text-center bg-[#10132E]"></span>
                {techStackRight.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 text-center bg-[#10132E] text-white-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};