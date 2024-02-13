interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  goToNextPage,
  goToPreviousPage,
}) => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-4 mb-8">
      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 0}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:hidden disabled:cursor-not-allowed transition-colors"
      >
        Previous
      </button>
      <span className="text-sm text-white">
        Page {currentPage + 1} of {totalPages}
      </span>
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages - 1}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:hidden disabled:cursor-not-allowed transition-colors"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
