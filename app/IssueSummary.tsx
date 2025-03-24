import { Status } from "@prisma/client";
import Link from "next/link";
import React from "react";
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
    <div className="flex flex-row gap-2">
      {container.map(({ label, value, status }) => (
        <div key={label} className="card bg-base-200 py-0 w-40 shadow-sm">
          <div className="card-body">
            <Link
              href={`/issues?status=${status}`}
              className="hover:underline text-md font-medium"
            >
              {label}
            </Link>
            <p className="text-3xl font-bold">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default IssueSummary;
