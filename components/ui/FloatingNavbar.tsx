"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { House, Archive, User } from "lucide-react";

export const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState("Home");

  // 라우터 경로에 따라 상태 업데이트
  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentItem = navItems.find((item) => item.link === currentPath);
    if (currentItem) {
      setSelected(currentItem.name);
    }
  }, [navItems]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
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
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-md z-[5000] pr-8 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 px-5 py-2 text-sm rounded-full",
              selected === navItem.name
                ? "dark:text-purple-500 text-blue-500"
                : "dark:text-neutral-50 text-neutral-600 hover:text-[15px] transition-all"
            )}
            onClick={() => {
              setSelected(navItem.name); // 클릭한 메뉴를 선택
              router.push(navItem.link); // 라우터 이동
            }}
          >
            <span className="block sm:hidden">
              {navItem.name === "Home" && (
                <House
                  className="h-5 w-5"
                  style={{
                    color: selected === "Home" ? "#6B46C1" : "inherit",
                  }}
                />
              )}
              {navItem.name === "Projects" && (
                <Archive
                  className="h-5 w-5"
                  style={{
                    color: selected === "Projects" ? "#6B46C1" : "inherit",
                  }}
                />
              )}
              {navItem.name === "About" && (
                <User
                  className="h-5 w-5"
                  style={{
                    color: selected === "About" ? "#6B46C1" : "inherit",
                  }}
                />
              )}
            </span>
            <span className="hidden sm:block">{navItem.name}</span>
          </Link>
        ))}
        <ModeToggle />
      </motion.div>
    </AnimatePresence>
  );
};