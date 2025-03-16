import Skeleton from "@/app/components/Skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="p-1 md:p-5 m-0 w-full space-y-3">
      <h1 className="text-2xl flex items-center space-x-2">
        <span className="font-bold ">Title:</span> <Skeleton className="w-32"/>
      </h1>
      <div className="flex space-x-2 items-center">
        <p>State:</p>
        <Skeleton className="w-10" />
      </div>
      <div className="prose mt-4 rounded bg-base-200 p-4 space-y-2 w-full md:w-8/12">
            <Skeleton  className="h-96"/>
      </div>
    </div>
  );
};

export default loading;
