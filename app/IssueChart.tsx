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
      label: "Open Issues",
      value: openIssues,
    },
    {
      label: "In Progress Issues",
      value: inProgressIssues,
    },
    {
      label: "Closed Issues",
      value: closedIssues,
    },
  ];
  return (
    <div className="card bg-base-100 w-lg shadow-sm">
      <div className="card-body">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
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
              barSize={60}
              style={{ fill: "var(--color-primary)" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IssueChart;
