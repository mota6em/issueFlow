import { Status } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { IssueStatusBadge } from "./components";
interface Props {
  openIssues: number;
  inProgressIssues: number;
  closedIssues: number;
}
const IssueSummary = ({
  openIssues,
  inProgressIssues,
  closedIssues,
}: Props) => {
  const container: { label: string; value: number; status: Status }[] = [
    { label: "Open", value: openIssues, status: "OPEN" },
    { label: "In Progress", value: inProgressIssues, status: "IN_PROGRESS" },
    { label: "Closed", value: closedIssues, status: "CLOSED" },
  ];
  return (
    <div className="flex flex-col gap-2 ">
      <h3 className="text-2xl font-bold">Total Issues</h3>
      <div className="flex flex-row gap-2 items-center justify-start">
        {container.map(({ label, value, status }) => (
          <Link
            key={label}
            href={`/issues?status=${status}`}
            className=" text-md font-medium"
          >
            <div className="card bg-base-200 py-0 w-44 shadow-sm border hover:border-base-content transition duration-100 border-base-content/10">
              <div className="card-body w-full">
                <IssueStatusBadge
                  className="text-lg font-bold "
                  status={status}
                />
                <p className="text-3xl font-bold">{value}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default IssueSummary;
