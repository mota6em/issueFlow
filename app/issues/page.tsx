import React from "react";
import { IssuesTable } from "../components/index";
import IssuesActions from "./IssuesActions";
import { Status } from "@prisma/client";
import { Issue } from "@prisma/client";
import prisma from "@/prisma/client";
import Pagination from "../components/Pagination";

interface Props {
  searchParams: Promise<{
    status?: Status;
    orderBy?: keyof Issue;
    direction?: "asc" | "desc";
    page?: string;
  }>;
}
const Issues = async ({ searchParams }: Props) => {
  const dataFromSearchParams = await searchParams;
  if (!(await searchParams).page) dataFromSearchParams.page = "1";
  const page = parseInt(dataFromSearchParams.page || "1", 10) || 1;
  const pageSize = 10;
  const itemCount = await prisma.issue.count({
    where: {
      status: dataFromSearchParams.status,
    },
  });
  return (
    <div className="mt-20 md:mt-0">
      <IssuesActions dataFromSearchParams={dataFromSearchParams} />
      <IssuesTable
        dataFromSearchParams={dataFromSearchParams}
        pagination={{ page, pageSize, itemCount }}
      />
      <Pagination currentPage={page} pageSize={pageSize} itemCount={itemCount} />
    </div>
  );
};
export const dynamic = "force-dynamic";
export default Issues;
