import { Status } from "@prisma/client";
import React from "react";

interface Props {
  status: Status;
  className?: string;
}

const IssueStatusBadge = ({ status, className }: Props) => {
  if (status === "OPEN") {
    return (
      <span className={`badge badge-soft badge-success ${className}`}>
        Open
      </span>
    );
  } else if (status === "IN_PROGRESS") {
    return (
      <span className={`badge badge-soft badge-warning ${className}`}>
        In Progress
      </span>
    );
  } else if (status === "CLOSED") {
    return (
      <span className={`badge badge-soft badge-error ${className}`}>
        Closed
      </span>
    );
  }
};

export default IssueStatusBadge;
