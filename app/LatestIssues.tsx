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
    <div className="card w-full mx-auto mb-5 bg-base-100  shadow-sm border-l-1 border-l-base-content/50 border border-base-content/10">
      <div className="card-body w-full p-4 md:p-2 lg:p-5">
        <h2 className="card-title text-md md:text-2xl">Latest Issues</h2>
        <table className="table w-full">
          <tbody>
            {latestIssues.map((issue) => (
              <tr key={issue.id}>
                <td className="flex px-1 md:px-2 justify-between">
                  <div className="flex flex-col space-y-1">
                    <Link
                      href={`/issues/${issue.id}`}
                      className="text-md md:text-lg hover:underline"
                    >
                      {issue.title}
                    </Link>
                    <IssueStatusBadge status={issue.status} />
                  </div>
                  {issue.assingedToUser && (
                    <div className="flex flex-row items-center justify-center space-x-1">
                      <p className="text-xs md:text-md text-base-content/50">Assignee:</p>
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
