import React from "react";
import { Button } from "react-bootstrap";

const PageBar = ({ currentPage, totalPages, onPageChange, maxVisiblePages = 5 }) => {
  // Calculate the range of pages to display
  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="Pagination">
      {/* First and Previous Buttons */}
      <Button
        variant="secondary"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 2)}
      >
        {"<<"}
      </Button>
      <Button
        variant="secondary"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {"<"}
      </Button>

      {/* Page Number Buttons */}
      {pages.map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "primary" : "secondary"}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}

      {/* Next and Last Buttons */}
      <Button
        variant="secondary"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {">"}
      </Button>
      <Button
        variant="secondary"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 2)}
      >
        {">>"}
      </Button>
    </div>
  );
};

export default PageBar;
