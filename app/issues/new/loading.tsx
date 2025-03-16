import React from "react";
import Skeleton from "@/app/components/Skeleton";
import classNames from "classnames";
const NewIssuePageSkeleton = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-6/12 space-y-2">
        <h1 className="text-2xl py-2 font-bold">New Issue</h1>{" "}
        <legend className="fieldset-legend text-lg">Title</legend>
        <h1 className="text-2xl py-2 font-bold">
          <Skeleton className="w-1/2 h-8" />
        </h1>{" "}
        <p className="text-lg">Description</p>
        <div className="w-full mb-5">
          <Skeleton className="w-full h-96" />
        </div>{" "}
        <button
          className={classNames({
            "btn btn-primary": true,
          })}
        >
          Submit New Issue
        </button>
      </div>
    </div>
  );
};

export default NewIssuePageSkeleton;
