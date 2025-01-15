'use client'
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Portfolio from '@/components/Portfolio';
import Footer from "@/components/Footer";

const ProjectPage = () => {
  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNavbar navItems={navItems} />
        <Portfolio />
        <Footer />
      </div>
    </main>
  )
}

export default ProjectPage