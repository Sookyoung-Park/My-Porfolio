"use client";
import { AppleCardsCarousel } from "./ui/AppleCardsCarousel";

const AllProject = () => {
  return (
    <div className="py-36 max-lg:pt-20 max-lg:pb-10">
      <h1 className="heading text-blue-700 dark:text-purple max-lg:text-2xl text-6xl font-bold">
        Portfolio
      </h1>
      <AppleCardsCarousel />
  </div>
  );
};

export default AllProject;