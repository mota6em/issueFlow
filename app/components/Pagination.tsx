"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

interface Props {
  pageSize: number;
  itemCount: number;
  currentPage: number;
}
const Pagination = ({ pageSize, itemCount, currentPage }: Props) => {
  const pagesCount = Math.ceil(itemCount / pageSize);
  if (pagesCount === 1) return null;
  const router = useRouter();
  const searchParams = useSearchParams();
  const onChangePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };
  return (
    <div className="flex  items-center my-4 ms-2">
      Page {currentPage} of {pagesCount}
      <div className="flex ms-2 space-x-2 ">
        <button
          className="btn text-lg px-2"
          disabled={currentPage === 1}
          onClick={() => onChangePage(1)}
        >
          <MdKeyboardDoubleArrowLeft />
        </button>
        <button
          className="btn text-lg px-2"
          disabled={currentPage === 1}
          onClick={() => onChangePage(currentPage - 1)}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          className="btn text-lg px-2"
          disabled={currentPage === pagesCount}
          onClick={() => onChangePage(currentPage + 1)}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
        <button
          className="btn text-lg px-2"
          disabled={currentPage === pagesCount}
          onClick={() => onChangePage(pagesCount)}
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
