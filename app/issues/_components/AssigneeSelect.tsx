"use client";
import { Skeleton } from "@/app/components";
import { Issue, User } from "@prisma/client";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const { data: users, error, isLoading } = useUsers();
  if (isLoading) return <Skeleton className="w-48 h-10" />;
  if (error) return null;
  return (
    <>
      <select
        onChange={(e) => {
          const userID = e.target.value;
          updateAssignedUser(issue, userID, users || []);
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
      <Toaster />
    </>
  );
};

export default AssigneeSelect;

const useUsers = () =>
  useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      return await axios("/api/users").then((res) => res.data);
    },
    staleTime: 60 * 1000,
    retry: 13,
  });

const updateAssignedUser = async (
  issue: Issue,
  userID: string,
  users: User[]
) => {
  await axios
    .patch(`/api/issues/${issue.id}`, {
      assignedToUserId: userID || null,
    })
    .then(() => {
      const assignedUser = users?.find((user) => user.id === userID);
      toast.success("Issue assigned to " + (assignedUser?.name || "No user"));
    })
    .catch(() =>
      toast.error("An unexpected error occurred. Please try again later.")
    );
};
