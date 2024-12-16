'use client'
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <h1 className='text-red-500'>Contact</h1>
      <div className="max-w-7xl w-full">
        <FloatingNavbar navItems={navItems} />
        <Footer />
      </div>
    </main>
  )
}

export default ContactPage