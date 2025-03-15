"use client";
import prisma from "@/prisma/client";
import Link from "next/link";
import React from "react";

const Issues = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div>
      <div className="mb-5 space-y-2">
        <h1 className="text-2xl font-bold">Issues page</h1>
        <Link href="/issues/new" className="btn btn-primary">
          Add Issue
        </Link>
      </div>
      <div className="overflow-x-scroll px-5 w-full rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Open at</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id}>
                <td>{issue.title}</td>
                <td>{issue.status}</td>
                <td>{issue.createdAt.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Issues;
