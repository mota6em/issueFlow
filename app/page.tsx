import prisma from "@/prisma/client";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";

export default async function Home() {
  const openIssues = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });
  return (
    <div className="grid md:px-5 w-full grid-cols-1 md:grid-cols-2 gap-2">
      <div className="space-y-5">
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
      <div>
        <LatestIssues />
      </div>
    </div>
  );
}
