import React from "react";
import Skeleton from "../components/Skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IssuesActions from "./IssuesActions";
const loading = () => {
  const issues = [1, 2, 3, 4, 5];
  return (
    <>
      <IssuesActions />
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
              <tr key={issue}>
                <td>
                  <Skeleton/>
                </td>
                <td>
                  <Skeleton/>
                </td>
                <td>
                  <Skeleton/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default loading;
