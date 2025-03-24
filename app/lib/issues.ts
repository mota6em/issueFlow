import prisma from "@/prisma/client";
import { Status } from "@prisma/client";

export async function getIssues(
  status?: Status,
  orderBy?: string,
  direction?: "asc" | "desc"
) {
  return await prisma.issue.findMany({
    where: {
      status,
    },
    orderBy: {
      [orderBy || "title"]: direction,
    },
  });
}
