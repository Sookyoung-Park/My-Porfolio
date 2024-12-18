"use client";
import { AppleCardsCarousel } from "./ui/AppleCardsCarousel";
import { FloatingDock } from "./ui/floating-dock";
import Image from "next/image";

const links = [
  {
    title: "UIUX Design",
    icon: (
      <Image
        src="/design.svg"
        width={40}
        height={40}
        alt="UIUX Design"
      />
    ),
    href: "#",
  },
  {
    title: "Development Project",
    icon: (
      <Image
        src="/code.svg"
        width={40}
        height={40}
        alt="Development Project"
      />
    ),
    href: "#",
  },
  {
    title: "Fun!",
    icon: (
      <Image
        src="/fun.svg"
        width={40}
        height={40}
        alt="Fun!"
      />
    ),
    href: "#",
  },
];

const AllProject = () => {
  return (
    <div className="py-36 max-lg:pt-20 max-lg:pb-10">
      <FloatingDock
        items={links}
      />
      <AppleCardsCarousel />
  </div>
  );
};

export default AllProject;