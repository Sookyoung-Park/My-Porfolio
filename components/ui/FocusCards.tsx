"use client";
import React from "react";

export const FocusCards = ({ data }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
      {data.map((card, index) => (
        <div
          key={index}
          className="relative group h-[50vh] bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-[50vh] object-cover"
          />

          {/* content */}
          <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5">
            <h2 className="text-white font-bold text-2xl">{card.title}</h2>
            <p className="text-gray-300 mt-2 text-left text-sm max-w-[360px]">{card.des}</p>
            <div className="flex items-center mt-4">
              {card.iconLists.map((icon, i) => (
                <img
                  key={i}
                  src={icon}
                  alt={`icon-${i}`}
                  className="w-8 h-8 mx-1 rounded-full bg-white/80 p-1"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
