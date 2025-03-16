import { IssueStatusBadge } from "@/app/components/index";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkDown from "react-markdown";
import { FaRegEdit } from "react-icons/fa";
import Link from "next/link";
interface Props {
  params: { id: string };
}
const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!issue) {
    notFound();
  }
  console.log(issue.status);

  return (
    <div className="flex items-start justify-around md:mx-4">
      <div className="p-1 md:p-5 m-0 w-full space-y-3">
        <h1 className="text-2xl ">
          <span className="font-bold ">Title:</span> {issue.title}
        </h1>
        <div className="flex space-x-2">
          <p>State:</p>
          <IssueStatusBadge status={issue.status} />
        </div>
        <div className="prose mt-4 rounded bg-base-200 p-4 space-y-2 w-full md:w-8/12">
          <ReactMarkDown>{issue.description}</ReactMarkDown>
        </div>
      </div>
      <div className="">
        <Link href={`/issues/${issue.id}/edit`} className="btn w-full m-4 btn-primary">
          Edit Issue <FaRegEdit />
        </Link>
      </div>
    </div>
  );
};

export default IssueDetailPage;
