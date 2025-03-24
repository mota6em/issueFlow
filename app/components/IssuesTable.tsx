import React from "react";
import IssueStatusBadge from "./IssueStatusBadge";
import { getIssues } from "../lib/issues";
import Link from "next/link";
import { Status } from "@prisma/client";
interface Props {
  status?: Status;
}
const IssuesTable = async ({ status }: Props) => {
  const issues = await getIssues(status);
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
              <td>
                <Link
                  href={`/issues/${issue.id}`}
                  className="text-primary  text-lg font-bold  hover:underline"
                >
                  {issue.title}
                </Link>
              </td>
              <td>{<IssueStatusBadge status={issue.status} />}</td>
              <td>{issue.createdAt.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssuesTable;
