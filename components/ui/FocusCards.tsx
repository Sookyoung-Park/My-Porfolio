'use client'
import { useState } from "react";
import { featuredProjects } from "@/data";
import Image from "next/image";
import { FocusCardModal } from "../FocusCardModal";

export const FocusCards = () => {
  const [modalData, setModalData] = useState(null); // To hold card data for modal

  const handleCardClick = (cardData) => {
    if (cardData.isGithub && cardData.link) {
      // If isGithub is true and link exists, open the link
      window.open(cardData.link, "_blank");
    } else {
      // Otherwise, open the modal
      setModalData(cardData);
    }
  };

  const closeModal = () => {
    setModalData(null); // Close modal by resetting the data
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
      {featuredProjects.map(({ id, title, des, img, badge, iconLists, isGithub, link }) => (
        <div
          key={id}
          onClick={() => handleCardClick({ title, des, img, badge, isGithub, link })}
          className="relative group h-[50vh] bg-gray-800 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <Image
            src={img}
            alt={title}
            layout="fill"
            objectFit="cover"
            quality={75}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5">
            <h2 className="text-white font-bold text-2xl">{title}</h2>
            <div className="flex flex-wrap justify-center mt-2">
              {badge.map((b, index) => {
                // Determine badge color
                const badgeColor = (() => {
                  if (b === "UIUX Design") return "bg-purple-600 text-white";
                  if (b === "FullStack" || b === "FrontEnd") return "bg-blue-500 text-white";
                  return "bg-gray-700 text-white";
                })();

                return (
                  <span
                    key={index}
                    className={`px-2 py-1 m-1 mb-3 text-[10px] font-semibold ${badgeColor}`}
                  >
                    {b}
                  </span>
                );
              })}
            </div>
            <p className="text-gray-300 mt-2 text-left text-sm max-w-[360px]">{des}</p>
          </div>
        </div>
      ))}
      {/* Modal Display */}
      {modalData && (
        <FocusCardModal
          title={modalData.title}
          description={modalData.des}
          imageSrc={modalData.img}
          isOpen={!!modalData}
          onClose={closeModal}
        />
      )}
    </div>
  );
};
