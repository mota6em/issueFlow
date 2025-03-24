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
    <div className="flex flex-col gap-2 w-full py-3">
      <h3 className="text-2xl w-fit font-bold">Total Issues</h3>
      <div className="flex flex-row gap-2 ">
        {container.map(({ label, value, status }) => (
          <Link
            key={label}
            href={`/issues?status=${status}`}
            className="text-xs lg:text-md font-medium w-full  p-4 rounded-md flex flex-col items-start justify-center gap-2 border border-base-content/10"
          >
            <IssueStatusBadge
              className="text-ssm md:text-lg   "
              status={status}
            />
            <p className="text-sm lg:text-3xl w-fit font-bold">{value}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default IssueSummary;
