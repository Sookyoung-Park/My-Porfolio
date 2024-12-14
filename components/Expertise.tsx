
'use client'
import React from "react";
import { ExpertiseData } from "@/data";
import { Button } from "./ui/MovingBorders";

const Expertise = () => {
  return (
    <div className="pt-20 pb-40 w-full">
      <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-8">
        {ExpertiseData.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-20 gap-2">
              <div className="lg:ms-5 flex">
                <h1 className="text-start text-xl md:text-2xl font-bold max-w-40 mr-4">
                  {card.title}
                </h1>
                <ul className="text-start text-white-100 font-semibold list-disc pl-5">
                  {card.desc.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Expertise;