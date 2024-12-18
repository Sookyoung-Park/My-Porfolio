import { useState } from "react";
import { AllProjects } from "@/data";
import Image from "next/image";
import { FocusCardModal } from "../FocusCardModal";


export const AllFocusCards = () => {
  const [modalData, setModalData] = useState(null); // To hold card data for modal
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null); // To filter by badge
  const [currentPage, setCurrentPage] = useState(1); // To handle pagination

  const projectsPerPage = 6;
  
  // Filter projects based on selected badge
  const filteredProjects = selectedBadge
    ? AllProjects.filter((project) => project.badge.includes(selectedBadge))
    : AllProjects;

  // Paginate the filtered projects
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handleCardClick = (cardData) => {
    setModalData(cardData); // Set the selected card data
  };

  const closeModal = () => {
    setModalData(null); // Close modal by resetting the data
  };

  const handleBadgeClick = (badge: string) => {
    setSelectedBadge(badge); // Set selected badge for filtering
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
            className="px-4 py-2 rounded-md border border-neutral-300/40  text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
            onClick={() => handleBadgeClick(null)}
            >
            All Projects
        </button>
        {["UIUX Design", "FullStack", "FrontEnd", "Media Art"].map((badge) => (
          <button
            key={badge}
            className="px-4 py-2 rounded-md border border-neutral-300/40  text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
            onClick={() => handleBadgeClick(badge)}
          >
            {badge}
          </button>
        ))}
        
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
        {paginatedProjects.map(({ id, title, des, img }) => (
          <div
            key={id}
            onClick={() => handleCardClick({ title, des, img })}
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
            className="px-4 py-2 bg-gray-700 text-white rounded-md"
          >
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 bg-gray-700 text-white rounded-md"
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