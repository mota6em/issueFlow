import prisma from "@/prisma/client";
import { Status } from "@prisma/client";

export async function getIssues(
  pagination: { page: number; pageSize: number; itemCount: number },
  status?: Status,
  orderBy?: string,
  direction?: "asc" | "desc" = "desc"
) {
  if (!status && !orderBy) return await prisma.issue.findMany();
  return await prisma.issue.findMany({
    where: status ? { status } : {},
    orderBy: orderBy
      ? {
          [orderBy || "title"]: direction,
        }
      : undefined,
    skip: (pagination.page - 1) * pagination.pageSize || 0,
    take: pagination.pageSize,
  });
}
