import React, { useEffect } from "react";
import "../styles/PaginationBtns.css"
import usePagination from "../hooks/usePagination";

const PaginationBtns = ({contentPerPage, length, setFirstIndex, setLastIndex}) => {

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: contentPerPage,
    length: length,
  });

  useEffect(()=>{
    setFirstIndex(firstContentIndex)
  }, [firstContentIndex, setFirstIndex])

  useEffect(()=>{
    setLastIndex(lastContentIndex)
  }, [lastContentIndex, setLastIndex])

  return (
    <div className="pagination">
       {/* <p className="text">
        {page}/{totalPages}
      </p> */}
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