"use client";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";

export const FocusCardModal = ({ card, isOpen, onClose }: any) => {
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
                    src="/projects/meu/meu-mockup.png" width={1000} height={100} alt="test" />
                welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf
            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf
            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf
            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf</div>
            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf
            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf
            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf

            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf
            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf

            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf
            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf
            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf
            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf
            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf

            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf
            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf
            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf
            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf
            welrjaeofij owiejfl kewjfo iweajofijwealkfj laewkfj owiejfoiwj oeifjlwkaejf
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
