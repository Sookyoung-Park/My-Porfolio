'use client';
import { useState } from "react";
import { AllProjects } from "@/data";
import Image from "next/image";
import { FocusCardModal } from "../FocusCardModal";

export const AllFocusCards = () => {
  const [modalData, setModalData] = useState(null); // To hold card data for modal
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]); // To store multiple selected badges
  const [currentPage, setCurrentPage] = useState(1); // To handle pagination

  const projectsPerPage = 6;

  // Filter projects based on selected badges
  const filteredProjects = selectedBadges.length > 0
    ? AllProjects.filter((project) =>
        selectedBadges.some((badge) => project.badge.includes(badge))
      )
    : AllProjects;

  // Paginate the filtered projects
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handleCardClick = (cardData) => {
    const { isGithub, link, title, des, img } = cardData;

    if (isGithub && link) {
      // If isGithub is true and link exists, open the link
      window.open(link, "_blank");
    } else {
      // Otherwise, open the modal
      setModalData({ title, des, img });
    }
  };

  const closeModal = () => {
    setModalData(null); // Close modal by resetting the data
  };

  const handleBadgeClick = (category: string) => {
    if (category === "UIUX Design") {
      setSelectedBadges(["UIUX Design"]); // Set only UIUX Design
    } 
    else if (category === "Development Project") {
      setSelectedBadges(["FullStack", "FrontEnd"]);
    } 
    else if (category === "All Projects"){
      setSelectedBadges([]);
    }
    else {
      setSelectedBadges(["AI", "Music", "VR Design", "AR Design", "Game Design"]);
    }

    setCurrentPage(1); // Reset to page 1 when badge is clicked
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Change to the selected page
  };

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <div className="space-y-8">
      <div className="flex space-x-4 mb-20 items-center justify-center">
        <button
          className="px-4 py-2 rounded-md border border-neutral-300/40 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          onClick={() => handleBadgeClick("All Projects")}
        >
          All Projects
        </button>
        {["UIUX Design","Development Project", "Fun!"].map((badge) => (
          <button
            key={badge}
            className="px-4 py-2 rounded-md border border-neutral-300/40 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
            onClick={() => handleBadgeClick(badge)}
          >
            {badge}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
        {paginatedProjects.map(({ id, title, des, img, badge, isGithub, link }) => (
          <div
            key={id}
            onClick={() => handleCardClick({ title, des, img, badge, isGithub, link })}
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
                    if (b === "UIUX Design") return "bg-purple-600 text-white";
                    if (b === "FullStack" || b === "FrontEnd") return "bg-blue-500 text-white";
                    return "bg-gray-700 text-white";
                  })();

                  return (
                    <span
                      key={index}
                      className={`px-2 py-1 mt-2 mr-2 mb-3 text-[10px] font-semibold ${badgeColor}`}
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
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4 mt-8">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className=
            // "px-3 py-2 bg-white-100/0.5 text-black-200 border border-[text-black-200/0.7] text-[12px] rounded-md"
            "mt-12 px-4 py-2 rounded-md border border-neutral-300/40 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          >
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className=
            // "px-4 py-2 bg-gray-700 text-white rounded-md"
            "mt-12 px-4 py-2 rounded-md border border-neutral-300/40 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          >
            Next
          </button>
        )}
      </div>

      {/* Modal Display */}
      {modalData && (
        <FocusCardModal
          title={modalData.title}
          description={modalData.des}
          imageSrc={modalData.img}
          isOpen={!!modalData}
          onClose={closeModal}
        />
      )}
    </div>
  );
};