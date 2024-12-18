'use client'
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto">
        {gridItems.map(({id, title, description, className, imgClassName, titleClassName}) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;