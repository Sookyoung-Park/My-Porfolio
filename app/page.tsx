'use client'
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { useTheme } from "next-themes";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import FeatureProjects from "@/components/FeatureProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    // {isDark
    <main className="relative dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNavbar navItems={navItems} />
        <Hero />
        <Grid />
        <FeatureProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
