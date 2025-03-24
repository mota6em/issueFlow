import prisma from "@/prisma/client";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import { Metadata } from "next";

export default async function Home() {
  const openIssues = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });
  return (
    <div className="grid md:grid-cols-2 min-h-screen  md:mt-20 grid-cols-1 md:gap-5 lg:gap-10 w-full">
      <div className="flex flex-col gap-5 w-full">
        <IssueSummary
          openIssues={openIssues}
          inProgressIssues={inProgressIssues}
          closedIssues={closedIssues}
        />
        <IssueChart
          openIssues={openIssues}
          inProgressIssues={inProgressIssues}
          closedIssues={closedIssues}
        />
      </div>
      <div className="flex flex-col mt-10 md:mt-0 gap-5 w-full">
        <LatestIssues />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Issue Flow | Home",
  description:
    "Issue Flow is a simple issue tracking system built with Next.js, Prisma, and Tailwind CSS. It allows you to create, edit, and delete issues, as well as view the status of all issues.",
  keywords: [
    "Next.js",
    "Prisma",
    "Tailwind CSS",
    "Issue Tracking",
    "Project Management",
  ],
  openGraph: {
    title: "Issue Flow | Home",
    description:
      "Issue Flow is a simple issue tracking system built with Next.js, Prisma, and Tailwind CSS. It allows you to create, edit, and delete issues, as well as view the status of all issues.",
    url: "https://issue-flow.vercel.app/",
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
    title: "Issue Flow | Home",
    description:
      "Issue Flow is a simple issue tracking system built with Next.js, Prisma, and Tailwind CSS. It allows you to create, edit, and delete issues, as well as view the status of all issues.",
    creator: "@wobscale",
    images: ["https://issue-flow.vercel.app/favicon.ico"],
  },
};
