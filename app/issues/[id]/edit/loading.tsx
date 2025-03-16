import { Spinner } from "@/app/components";
import React from "react";

const loading = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      Loading.. <Spinner />
    </div>
  );
};

export default loading;
