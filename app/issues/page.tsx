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
  const dataFromSearchParams = await searchParams;

  return (
    <div>
      <IssuesActions dataFromSearchParams={dataFromSearchParams} />
      <IssuesTable dataFromSearchParams={dataFromSearchParams} />
    </div>
  );
};
export const dynamic = "force-dynamic";
export default Issues;
