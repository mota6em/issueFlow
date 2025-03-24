import prisma from "@/prisma/client";
import { Status } from "@prisma/client";

export async function getIssues(status?: Status) {
  if (!status) return await prisma.issue.findMany();
  return await prisma.issue.findMany({
    where: {
      status: status,
    },
  });
}
