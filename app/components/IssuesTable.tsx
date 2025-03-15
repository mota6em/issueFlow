import React from "react";
import IssueStatusBadge from "./IssueStatusBadge";
import { getIssues } from "../lib/issues";

const IssuesTable = async () => {
  const issues = await getIssues();
  return (
    <div className="overflow-x-scroll px-5 w-full rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Open at</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.title}</td>
              <td>{<IssueStatusBadge status={issue.status} />}</td>
              <td>{issue.createdAt.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssuesTable;
