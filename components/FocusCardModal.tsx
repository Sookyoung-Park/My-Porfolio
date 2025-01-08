"use client";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";

export const FocusCardModal = ({ card, isOpen, onClose }: any) => {
  console.log('here: ',card)
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
            {/* <div className="py-10">{card.content}</div> */}
            <div className="py-10 dark:text-neutral-100">
              {/* placeholder */}
                <Image
                  src="/projects/meu/meu-mockup.png" width={1000} height={100} alt="test" 
                />
                <h2 className="text-4xl font-bold mt-10">{card?.title || "No Title"}</h2>
                <h4 className="text-md font-medium mt-6"> {card?.type || "No project type"} </h4>
                <h4 className="text-md font-medium mt-1"> Tool: {card?.tool ? card.tool.join(", ") : "No Tool"} </h4>
                <h4 className="text-md font-medium mt-1 mb-14"> Timeline: {card?.timeline || "No timeline"} </h4>

                <h4 className="text-md font-semibold mb-4"> Project Overview </h4>
                <p className="text-md font-regular">{card?.overview || "No Title"}</p>

              </div>
  


          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
