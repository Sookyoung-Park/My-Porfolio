import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <div className="hidden md:block mb-20">
        <FloatingDockDesktop items={items} className={desktopClassName} />
      </div>
    </>
  );
};

const FloatingDockDesktop = ({
   items, className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-24 gap-8 items-end justify-center px-4",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
 
    return val - bounds.x - bounds.width / 2;
   });

  let widthTransform = useTransform(distance, [-150, 0, 150], [60, 100, 60]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [60, 100, 60]);

   let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
   let heightTransformIcon = useTransform(
     distance,
     [-150, 0, 150],
     [20, 40, 20]
   );
 
   let width = useSpring(widthTransform, {
     mass: 0.1,
     stiffness: 150,
     damping: 12,
   });
   let height = useSpring(heightTransform, {
     mass: 0.1,
     stiffness: 150,
     damping: 12,
   });
 
   let widthIcon = useSpring(widthTransformIcon, {
     mass: 0.1,
     stiffness: 150,
     damping: 12,
   });
   let heightIcon = useSpring(heightTransformIcon, {
     mass: 0.1,
     stiffness: 150,
     damping: 12,
   });
 
   const [hovered, setHovered] = useState(false);
 
   return (
     <Link href={href}>
       <motion.div
         ref={ref}
         style={{ width, height }}
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
         className="aspect-square rounded-full bg-white border border-gray-200 shadow-md dark:bg-neutral-800 flex items-center justify-center relative "
       >
         <AnimatePresence>
           {hovered && (
             <motion.div
               initial={{ opacity: 0, y: 10, x: "-50%" }}
               animate={{ opacity: 1, y: 0, x: "-50%" }}
               exit={{ opacity: 0, y: 2, x: "-50%" }}
               className="px-2 py-1 whitespace-pre rounded-md dark:border-neutral-900 dark:text-white border-gray-200  text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-[16px]"
             >
               {title}
             </motion.div>
           )}
         </AnimatePresence>
         <motion.div
           style={{ width: widthIcon, height: heightIcon }}
           className="flex items-center justify-center"
         >
           {icon}
         </motion.div>
       </motion.div>
     </Link>
   );
 }
 