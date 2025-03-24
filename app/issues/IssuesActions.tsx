import Link from "next/link";
import React from "react";
import IssueStatusFilter from "./IssueStatusFilter";
import { Issue } from "@prisma/client";

interface Props {
  dataFromSearchParams: {
    status?: Status;
    orderBy?: keyof Issue;
    direction?: "asc" | "desc";
  };
}
const IssuesActions = ({ dataFromSearchParams }: Props) => {
  return (
    <div className="mb-5 space-y-2">
      <h1 className="text-2xl font-bold">Issues page</h1>
      <div className="flex justify-between items-center lg:px-5">
        <IssueStatusFilter dataFromSearchParams={dataFromSearchParams} />
        <Link href="/issues/new" className="btn btn-primary">
          Add Issue
        </Link>
      </div>
    </div>
  );
};

export default IssuesActions;
