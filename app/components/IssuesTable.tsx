import React from "react";
import IssueStatusBadge from "./IssueStatusBadge";
import { getIssues } from "../lib/issues";
import Link from "next/link";
import { Issue, Status } from "@prisma/client";
import { FaArrowUp } from "react-icons/fa";

interface Props {
  dataFromSearchParams: {
    status?: Status;
    orderBy?: keyof Issue;
    direction?: "asc" | "desc";
  };
  pagination: { page: number; pageSize: number; itemCount: number };
}
const IssuesTable = async ({ dataFromSearchParams, pagination }: Props) => {
  const { status, direction } = dataFromSearchParams;
  let orderBy = dataFromSearchParams.orderBy;
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
  if (!columns.map((column) => column.value).includes(orderBy!)) {
    orderBy = "title";
  }
  const nextDirection = direction === "asc" ? "desc" : "asc";
  const issues = await getIssues(pagination, status, orderBy, direction);
  return (
    <div className="overflow-x-scroll px-5 w-full rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.value}>
                <Link
                  href={`/issues?orderBy=${column.value}&direction=${
                    orderBy === column.value ? nextDirection : direction
                  }${status ? `&status=${status}` : ""}`}
                  className="flex flex-row items-center  text-lg font-bold  hover:underline"
                >
                  {orderBy === column.value && (
                    <FaArrowUp
                      className={`me-1 transition-transform ${
                        direction === "asc" ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  {column.label}
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td className="min-w-60">
                <Link
                  href={`/issues/${issue.id}`}
                  className="text-primary text-lg font-bold  hover:underline"
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
