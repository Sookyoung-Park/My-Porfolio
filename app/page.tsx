import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import FeatureProjects from "@/components/FeatureProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
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
