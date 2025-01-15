"use client"
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export const FocusCardModal = ({ card, isOpen, onClose }: any) => {

  console.log("hereL ",card)
  const [ContentComponent, setContentComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    if (card?.content) {
      import(`../components/contents/${card.content}.tsx`)
        .then((module) => setContentComponent(() => module.default))
        .catch(() => setContentComponent(() => null)); // 에러 처리
    }

  }, [card?.content]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 h-screen z-50 overflow-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
          >
            <button
              className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
              onClick={onClose}
            >
              <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
            </button>
            <div className="py-10 dark:text-neutral-100">
                <Image
                  src={card.img} width={1000} height={100} alt="test" 
                />
                <h2 className="text-4xl font-bold mt-10 text-black-100 dark:text-white">{card?.title || "No Title"}</h2>
                <h4 className="text-sm font-medium mt-6 text-black-100 dark:text-white"> {card?.type || "No project type"} </h4>
                <h4 className="text-sm font-medium mt-1 text-black-100 dark:text-white"> Tool: {card?.tool ? card.tool.join(", ") : "No Tool"} </h4>
                <h4 className="text-sm font-medium mt-1 mb-14 text-black-100 dark:text-white"> Timeline: {card?.timeline || "No timeline"} </h4>

                <h4 className="text-lg font-semibold mb-4 text-black-100 dark:text-white"> Project Overview </h4>
                <p className="text-sm font-regular text-black-100 dark:text-white">{card?.overview || "No Title"}</p>

                {/* from here */}
                {ContentComponent ? (
                  <ContentComponent />
                ) : (
                  <p className="text-md font-regular mt-10">No content available</p>
                )}
              </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
