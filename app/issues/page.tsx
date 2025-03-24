import React from "react";
import { IssuesTable } from "../components/index";
import IssuesActions from "./IssuesActions";
import { Status } from "@prisma/client";
import { Issue } from "@prisma/client";

interface Props {
  searchParams: Promise<{
    status?: Status;
    orderBy?: keyof Issue;
  }>;
}
const Issues = async ({ searchParams }: Props) => {
  let { status, orderBy } = await searchParams;
  const statuses = Object.values(Status);
  status = statuses.includes(status) ? status : undefined;
  return (
    <div>
      <IssuesActions orderBy={orderBy} />
      <IssuesTable status={status} orderBy={orderBy} />
    </div>
  );
};
export const dynamic = "force-dynamic";
export default Issues;
