import Link from "next/link";
import React from "react";
import IssueStatusFilter from "./IssueStatusFilter";

const IssuesActions = () => {
  return (
    <div className="mb-5 space-y-2">
      <h1 className="text-2xl font-bold">Issues page</h1>
      <div className="flex justify-between items-center lg:px-5">
        <IssueStatusFilter />
        <Link href="/issues/new" className="btn btn-primary">
          Add Issue
        </Link>
      </div>
    </div>
  );
};

export default IssuesActions;
