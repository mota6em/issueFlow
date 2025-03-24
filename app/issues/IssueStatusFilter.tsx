"use client";
import { Issue, Status } from "@prisma/client";

import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  dataFromSearchParams: {
    status?: Status;
    orderBy?: keyof Issue;
    direction?: "asc" | "desc";
  };
}
const IssueStatusFilter = ({ dataFromSearchParams }: Props) => {
  const orderBy = dataFromSearchParams?.orderBy ?? "title";
  const direction = dataFromSearchParams?.direction ?? "desc";
  const status = dataFromSearchParams?.status ?? "";

  const statuses: {
    label: string;
    value: Status | "";
  }[] = [
    { label: "All", value: "" },
    { label: "Open", value: "OPEN" },
    { label: "In Progress", value: "IN_PROGRESS" },
    { label: "Closed", value: "CLOSED" },
  ];

  const router = useRouter();

  return (
    <div>
      <fieldset className="fieldset flex items-center">
        <legend className="fieldset-legend text-lg">Status</legend>
        <select
          className="select select-primary cursor-pointer w-48 py-2  "
          defaultValue={status || ""}
          onChange={(e) => {
            const status = e.target.value;
            const params = new URLSearchParams();
            if (status) params.set("status", status);
            if (orderBy) params.set("orderBy", orderBy);
            if (direction) params.set("direction", direction);
            const query = params.size > 0 ? `?${params.toString()}` : "";

            router.push(`/issues${query}`);
          }}
        >
          {statuses.map((status) => (
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
