"use client";
import { Issue, Status } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";

const IssueStatusFilter = ({ orderBy }: { orderBy: keyof Issue }) => {
  const status: {
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
          defaultValue={""}
          onChange={(e) => {
            const status = e.target.value;
            let query = "";

            if (status) {
              query += `?status=${status}`;
            }

            if (orderBy) {
              query += query ? `&orderBy=${orderBy}` : `?orderBy=${orderBy}`;
            }
            router.push(`/issues${query}`);
          }}
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
