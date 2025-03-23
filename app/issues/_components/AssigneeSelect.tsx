"use client";
import { Skeleton } from "@/app/components";
import { Issue, User } from "@prisma/client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      return await axios("/api/users").then((res) => res.data);
    },
    staleTime: 60 * 1000,
    retry: 13,
  });
  if (isLoading) return <Skeleton className="w-48 h-10" />;
  if (error) return null;
  return (
    <select
      onChange={(e) => {
        const userID = e.target.value;
        console.log(userID);
        const updateAssignedUser = async () => {
          await axios.patch(`/api/issues/${issue.id}`, {
            assignedToUserId: userID || null,
          });
        };
        updateAssignedUser();
      }}
      defaultValue={issue.assignedToUserId || ""}
      className="select select-primary cursor-pointer w-48 py-2  "
    >
      <option value={""} className="text-red-300">
        Un assigned
      </option>
      {users?.map((user) => (
        <option className="text-base mx-5" value={user.id} key={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default AssigneeSelect;
