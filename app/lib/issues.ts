import prisma from "@/prisma/client";
import { Status } from "@prisma/client";

export async function getIssues(
  status?: Status,
  orderBy?: string,
  direction?: "asc" | "desc" = "desc"
) {
  if (!status && !orderBy) return await prisma.issue.findMany();
  return await prisma.issue.findMany({
    where: {
      status: status,
    },
    orderBy: {
      [orderBy || "title"]: direction,
    },
  });
}
