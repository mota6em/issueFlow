import React from "react";
import IssueStatusBadge from "./IssueStatusBadge";
import { getIssues } from "../lib/issues";
import Link from "next/link";
import { Issue, Status } from "@prisma/client";
import { FaArrowUp } from "react-icons/fa";

interface Props {
  status?: Status;
  orderBy?: keyof Issue;
}
const IssuesTable = async ({ status, orderBy }: Props) => {
  const issues = await getIssues(status);
  const columns: {
    label: string;
    value: keyof Issue;
  }[] = [
    {
      label: "Title",
      value: "title",
    },
    {
      label: "Status",
      value: "status",
    },
    {
      label: "Open at",
      value: "createdAt",
    },
  ];
  return (
    <div className="overflow-x-scroll px-5 w-full rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.value}>
                <Link
                  href={
                    issues
                      ? `/issues?orderBy=${column.value}&status=${status}`
                      : `/issues?status=${status}`
                  }
                  className="flex flex-row items-center  text-lg font-bold  hover:underline"
                >
                  {orderBy === column.value && <FaArrowUp className="me-1" />} {column.label}
                </Link>
              </th>
            ))}
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
