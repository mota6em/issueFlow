import prisma from "@/prisma/client";
import React from "react";

const IssuesTable =  async () => {
  const issues = await prisma.issue.findMany();
  return (
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
  );
};

export default IssuesTable;
