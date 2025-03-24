import React from "react";
import { IssuesTable } from "../components/index";
import IssuesActions from "./IssuesActions";
import { Status } from "@prisma/client";
import { stat } from "fs";
interface Props {
  searchParams: Promise<{
    status?: Status;
  }>;
}
const Issues = async ({ searchParams }: Props) => {
  let { status } = await searchParams;
  const statuses = Object.values(Status);
  status = statuses.includes(status) ? status : undefined;
  return (
    <div>
      <IssuesActions />
      <IssuesTable status={status} />
    </div>
  );
};
export const dynamic = "force-dynamic";
export default Issues;
