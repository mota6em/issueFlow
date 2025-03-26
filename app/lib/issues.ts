import prisma from "@/prisma/client";
import { Status } from "@prisma/client";

export async function getIssues(
  pagination: { page: number; pageSize: number; itemCount: number },
  status?: Status,
  orderBy?: string,
  direction?: string = "asc" | "desc" | undefined
) {
  return await prisma.issue.findMany({
    where: status ? { status } : {},

    orderBy: {
      [orderBy ?? "title"]: direction === "asc" ? "asc" : "desc",
    },

    skip: (pagination.page - 1) * pagination.pageSize || 0,
    take: pagination.pageSize,
  });
}
