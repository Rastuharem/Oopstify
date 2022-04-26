import React from "react";
import "../styles/PaginationBtns.css"

const PaginationBtns = ({page, totalPages, prevPage, nextPage, setPage}) => {
  return (
    <div className="pagination">
      <p className="text">
        {page}/{totalPages}
      </p>
      <button onClick={prevPage} className="page">
        &larr;
      </button>
      {[...Array(totalPages).keys()].map((el) => (
        <button
          onClick={() => setPage(el + 1)}
          key={el}
          className="page numbered"
        >
          {el + 1}
        </button>
      ))}
      <button onClick={nextPage} className="page">
        &rarr;
      </button>
    </div>
  );
};

export default PaginationBtns