import prisma from "@/prisma/client";

export async function getIssues() {
  return await prisma.issue.findMany();
}
