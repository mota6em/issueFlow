import { Spinner } from "@/app/components";
import axios from "axios";

import React from "react";

const DeleteIssuePage = async ({ params }: { params: { id: string } }) => {
  await axios.delete(`/api/issues/${params.id}`);
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      Loading.. <Spinner />
    </div>
  );
};

export default DeleteIssuePage;
