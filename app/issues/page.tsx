"use client";
import Link from "next/link";
import React from "react";
import IssuesTable from "../components/IssuesTable";

const Issues = () => {
  return (
    <div>
      <div className="mb-5 space-y-2">
        <h1 className="text-2xl font-bold">Issues page</h1>
        <Link href="/issues/new" className="btn btn-primary">
          Add Issue
        </Link>
      </div>
      <IssuesTable />
    </div>
  );
};

export default Issues;
