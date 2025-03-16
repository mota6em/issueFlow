import React from "react";
import { IssuesTable } from "../components/index";
import IssuesActions from "./IssuesActions";

const Issues = async () => {
  //  await delay(5000);
  return (
    <div>
      <IssuesActions />
      <IssuesTable />
    </div>
  );
};
export const dynamic = "force-dynamic";
export default Issues;
