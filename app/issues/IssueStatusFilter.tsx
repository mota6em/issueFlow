"use client";
import { Status } from "@prisma/client";
import React from "react";

const IssueStatusFilter = () => {
  const status: {
    label: string;
    value: Status;
  }[] = [
    { label: "All", value: "" },
    { label: "Open", value: "OPEN" },
    { label: "In Progress", value: "IN_PROGRESS" },
    { label: "Closed", value: "CLOSED" },
  ];
  return (
    <div>
      <fieldset className="fieldset flex items-center">
        <legend className="fieldset-legend text-lg">Status</legend>
        <select
          className="select select-primary cursor-pointer w-48 py-2  "
          defaultValue={""}
        >
          {status.map((status) => (
            <option
              className="text-base mx-5"
              value={status.value}
              key={status.value}
            >
              {status.label}
            </option>
          ))}
        </select>
      </fieldset>
    </div>
  );
};

export default IssueStatusFilter;
