"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { House, Archive, User } from 'lucide-react';
import { Button } from "@/components/ui/button";


export const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState("Home");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } 
      else {
        if (direction < 0) {
          setVisible(true);
        } 
        else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 px-5 py-2"
            )}
            onClick={() => setSelected(navItem.name)}
          >
            <span className="block sm:hidden">
              {navItem.name === "Home" && (
                <Button
                variant="outline"
                size="icon"
                className="border-white/[0.2] rounded-[100px] cursor-pointer hover:scale-110 transition-transform duration-200 "
              >
                  <House
                    className="h-[1.2rem] w-[1.2rem] hover:scale-110 transition-transform duration-200 cursor-pointer"
                    // style={{ color: "black" }}
                    style={{ color: selected === "Home" ? "#4299e1" : "Black" }}
                  />
                <span className="sr-only">Toggle theme</span>
              </Button>
              )}
              {navItem.name === "Projects" && (
                <Button
                variant="outline"
                size="icon"
                className="border-white/[0.2] rounded-[100px] cursor-pointer  hover:scale-110 transition-transform duration-200 "
              >
                  <Archive
                    className="h-[1.2rem] w-[1.2rem] hover:scale-110 transition-transform duration-200 cursor-pointer"
                    // style={{ color: "black" }}
                    style={{ color: selected === "Projects" ? "#4299e1" : "Black" }}
                  />
              </Button>
              )}
              {navItem.name === "About" && (
                <Button
                variant="outline"
                size="icon"
                className="border-white/[0.2] rounded-[100px] cursor-pointer  hover:scale-110 transition-transform duration-200 "
              >
                  <User
                    className="h-[1.2rem] w-[1.2rem] hover:scale-110 transition-transform duration-200 cursor-pointer"
                    // style={{ color: "Black" }}
                    style={{ color: selected === "About" ? "#4299e1" : "Black" }}
                  />
              </Button>
              )}

              </span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <ModeToggle />
      </motion.div>
    </AnimatePresence>
  );
};
