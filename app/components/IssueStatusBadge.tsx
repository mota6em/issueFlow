import { Status } from "@prisma/client";
import React from "react";

interface Props {
  status: Status;
}

const IssueStatusBadge = ({ status }: Props) => {
  if (status === 'OPEN') {
    return <span className="badge badge-soft badge-success">Open</span>;
  } else if (status === "IN_PROGRESS") {
    return <span className="badge badge-soft badge-warning">In Progress</span>;
  } else if (status === "CLOSED") {
    return <span className="badge badge-soft badge-error">Closed</span>;
  }
};

export default IssueStatusBadge;
