import React from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

interface Props {
  currentPage: number;
  pageSize: number;
  itemCount: number;
}
const Pagination = ({ currentPage, pageSize, itemCount }: Props) => {
  const pagesCount = Math.ceil(itemCount / pageSize);
  if (pagesCount === 1) return null;
  return (
    <div className="flex  items-center">
      This is page {currentPage} of {pagesCount}
      <div className="flex ms-2 space-x-2 ">
        <button className="btn text-lg px-2" disabled={currentPage === 1}>
          <MdKeyboardDoubleArrowLeft />
        </button>
        <button className="btn text-lg px-2" disabled={currentPage === 1}>
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          className="btn text-lg px-2"
          disabled={currentPage === pagesCount}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
        <button
          className="btn text-lg px-2"
          disabled={currentPage === pagesCount}
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
