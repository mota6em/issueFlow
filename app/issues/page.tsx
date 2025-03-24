import React from "react";
import { IssuesTable } from "../components/index";
import IssuesActions from "./IssuesActions";
import { Status } from "@prisma/client";
import { Issue } from "@prisma/client";

interface Props {
  searchParams: Promise<{
    status?: Status;
    orderBy?: keyof Issue;
    direction?: "asc" | "desc";
  }>;
}
const Issues = async ({ searchParams }: Props) => {
  let dataFromSearchParams = await searchParams;

  return (
    <div>
      <IssuesActions orderBy={dataFromSearchParams.orderBy} direction={dataFromSearchParams.direction} />
      <IssuesTable dataFromSearchParams={dataFromSearchParams} />
    </div>
  );
};
export const dynamic = "force-dynamic";
export default Issues;
