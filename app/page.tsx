import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-between ">
      {/* <IssueSummary openIssues={3} inProgressIssues={34} closedIssues={2} />
      <LatestIssues /> */}
      <IssueChart openIssues={3} inProgressIssues={34} closedIssues={2} />
    </div>
  );
}
