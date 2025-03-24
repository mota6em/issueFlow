import prisma from "@/prisma/client";
import React from "react";
import { IssueStatusBadge } from "./components";
import Link from "next/link";

const LatestIssues = async () => {
  const latestIssues = await prisma.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
    include: {
      assingedToUser: true,
    },
  });
  return (
    <div className="card bg-base-200 w-lg shadow-2xl">
      <div className="card-body">
        <h2 className="card-title">Latest Issues</h2>
        <table className="table">
          <tbody>
            {latestIssues.map((issue) => (
              <tr key={issue.id}>
                <td className="flex justify-between">
                  <div className="flex flex-col space-y-1">
                    <Link
                      href={`/issues/${issue.id}`}
                      className="text-lg hover:underline"
                    >
                      {issue.title}
                    </Link>
                    <IssueStatusBadge status={issue.status} />
                  </div>
                  {issue.assingedToUser && (
                    <div className="flex flex-row items-center justify-center space-x-1">
                      <p className="text-md">Assignee:</p>
                      <div className="avatar ">
                        <div className="w-7 h-7 rounded-full">
                          <img src={issue.assingedToUser.image} />
                        </div>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestIssues;
