import React from "react";
import { IssuesTable } from "../components/index";
import IssuesActions from "./IssuesActions";
import { Status } from "@prisma/client";
import { Issue } from "@prisma/client";
import prisma from "@/prisma/client";
import Pagination from "../components/Pagination";
import { Metadata } from "next";

interface Props {
  searchParams: Promise<{
    status?: Status;
    orderBy?: keyof Issue;
    direction?: "asc" | "desc";
    page?: string;
  }>;
}
const Issues = async ({ searchParams }: Props) => {
  const dataFromSearchParams = await searchParams;
  if (!(await searchParams).page) dataFromSearchParams.page = "1";
  const page = parseInt(dataFromSearchParams.page || "1", 10) || 1;
  const pageSize = 10;
  const itemCount = await prisma.issue.count({
    where: {
      status: dataFromSearchParams.status,
    },
  });
  return (
    <div className="mt-20 md:mt-15">
      <IssuesActions dataFromSearchParams={dataFromSearchParams} />
      <IssuesTable
        dataFromSearchParams={dataFromSearchParams}
        pagination={{ page, pageSize, itemCount }}
      />
      <Pagination currentPage={page} pageSize={pageSize} itemCount={itemCount} />
    </div>
  );
};
export const dynamic = "force-dynamic";
export default Issues;


export const metadata: Metadata = {
  title: "Issue Flow | Issues",
  description:
    "Manage and track issues effectively with Issue Flow. View, filter, and navigate through issues with ease.",
  keywords: [
    "Issue Tracking",
    "Project Management",
    "Task Management",
    "Next.js",
    "Prisma",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "Issue Flow | Issues",
    description:
      "Manage and track issues effectively with Issue Flow. View, filter, and navigate through issues with ease.",
    url: "https://issue-flow.vercel.app/issues",
    siteName: "Issue Flow",
    images: [
      {
        url: "https://issue-flow.vercel.app/favicon.ico",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Issue Flow | Issues",
    description:
      "Manage and track issues effectively with Issue Flow. View, filter, and navigate through issues with ease.",
    creator: "@wobscale",
    images: ["https://issue-flow.vercel.app/favicon.ico"],
  },
};

