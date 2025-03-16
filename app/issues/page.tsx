import React from "react";
import IssuesTable from "../components/IssuesTable";
import IssuesActions from "./IssuesActions";
import delay from "delay";
 const Issues = async () => {
  //  await delay(5000);
   return (
     <div>
      <IssuesActions />
      <IssuesTable />
    </div>
  );
};

export default Issues;
