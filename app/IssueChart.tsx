"use client";
import React from "react";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts";
interface Props {
  openIssues: number;
  inProgressIssues: number;
  closedIssues: number;
}
const IssueChart = ({ openIssues, inProgressIssues, closedIssues }: Props) => {
  const data = [
    {
      label: "Open",
      value: openIssues,
    },
    {
      label: "In Progress",
      value: inProgressIssues,
    },
    {
      label: "Closed",
      value: closedIssues,
    },
  ];
  return (
    <div className="card bg-base-100 shadow-sm border py-2 pt-4 border-base-content/10 w-full max-w-2xl mx-auto">
      <ResponsiveContainer width="100%" height={300} className={"-ms-4"}>
        <BarChart
          data={data}
          margin={{ left: 20, right: 20 }}
          className="mx-auto w-full"
        >
          <XAxis
            dataKey="label"
            stroke="#8884d8"
            tick={{ fill: "var(--color-base-content)", fontSize: 14 }}
          />
          <YAxis
            stroke="#8884d8"
            tick={{ fill: "var(--color-base-content)", fontSize: 14 }}
          />
          <Bar
            dataKey="value"
            barSize={30}
            style={{ fill: "var(--color-primary)" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IssueChart;
