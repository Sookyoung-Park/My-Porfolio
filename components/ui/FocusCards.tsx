"use client";
import { featuredProjects } from "@/data";
import Link from "next/link";
import Image from "next/image";

export const FocusCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
      {featuredProjects.map(({ id, title, des, img, iconLists, link, badge }) => (
      <Link href={link} key={id}>
        <div className="relative group h-[50vh] bg-gray-800 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <Image
            src={img}
            alt={title}
            layout="fill"
            objectFit="cover"
            quality={75}
            className="w-full h-full"
          />

      {/* content */}
      <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5">
        <h2 className="text-white font-bold text-2xl">{title}</h2>

        {/* Badge 리스트 */}
        <div className="flex flex-wrap gap-2 mt-2">
          {badge.map((item, index) => {
            // 배지 스타일링을 조건부 클래스 로직으로 적용
            const badgeStyle = (() => {
              if (item === "UIUX Design") {
                return "bg-purple-600 text-white";
              } else if (item === "Media Art") {
                return "bg-gray-800 text-white";
              } else if (item === "FrontEnd" || item === "FullStack") {
                return "bg-blue-500 text-white";
              } else {
                return "bg-gray-700 text-black"; 
              }
            })();

            return (
              <span
                key={index}
                className={`px-3 py-1 text-[10px] font-medium mb-2 ${badgeStyle}`}
              >
                {item}
              </span>
            );
          })}
        </div>

        <p className="text-gray-300 mt-2 text-left text-sm max-w-[360px]">{des}</p>
        <div className="flex items-center mt-4">
          {iconLists.map((icon, i) => (
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
  </Link>
))}

    </div>
  );
};
