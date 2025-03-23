import React from "react";
import { IssuesTable } from "../components/index";
import IssuesActions from "./IssuesActions";

const Issues = async () => {
  return (
    <div>
      <IssuesActions />
      <IssuesTable />
    </div>
  );
};
export const dynamic = "force-dynamic";
export default Issues;
