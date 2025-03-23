"use client";
import { Skeleton } from "@/app/components";
import { User } from "@prisma/client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const AssigneeSelect = () => {
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
      defaultValue="Assing to user"
      className="select select-primary cursor-pointer w-48"
    >
      <option disabled={true}>Assing to user</option>
      {users?.map((user) => (
        <option className="text-base mx-5" key={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default AssigneeSelect;
