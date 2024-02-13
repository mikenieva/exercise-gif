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
    <div>
      <button onClick={goToPreviousPage} disabled={currentPage === 0}>
        Anterior
      </button>
      <button onClick={goToNextPage} disabled={currentPage === totalPages - 1}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
