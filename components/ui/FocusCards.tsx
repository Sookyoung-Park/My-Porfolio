'use client'
import { useState } from "react";
import { featuredProjects } from "@/data";
import Image from "next/image";
import { FocusCardModal } from "../FocusCardModal";

export const FocusCards = () => {
  const [modalData, setModalData] = useState<CardData | null>(null);

  interface CardData {
    id: number; 
    title: string;
    des: string;
    img: string;
    badge: string[];
    isGithub: boolean;
    link?: string;
    type?: string;
    tool?: string[];
    timeline?: string;
    overview?: string;
    content?: string;
  }

  const handleCardClick = (cardData: CardData) => {
    const { isGithub, link } = cardData;
  
    if (isGithub && link) {
      window.open(link, "_blank");
    } else {
      setModalData(cardData);
    }
  };

  const closeModal = () => {
    setModalData(null); // Close modal by resetting the data
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
      {featuredProjects.map(({ id, title, des, img, badge, isGithub, link, type, tool, timeline, overview, content }) => (
        <div
          key={id}
          onClick={() => handleCardClick({ id, title, des, img, badge, isGithub, link, type, tool, timeline, overview, content })}
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
                  if (b === "UIUX Design") return "bg-purple-500 text-white";
                  if (b === "FullStack" || b === "FrontEnd") return "bg-blue-700 text-white";
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
      {modalData && (
        <FocusCardModal
          card={modalData}
          isOpen={!!modalData}
          onClose={closeModal}
        />
      )}
    </div>
  );
};
