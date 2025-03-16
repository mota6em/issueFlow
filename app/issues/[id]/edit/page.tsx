import prisma from "@/prisma/client";
import React from "react";
import IssueForm from "../../_components/IssueForm";
 

interface Props {
  params: { id: string };
}
const page = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  return <IssueForm issue={issue} />;
};

export default page;
