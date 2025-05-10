import prisma from '@/shared/lib/prisma'

export async function GetAllBlogs() {
  return await prisma.post.findMany()
}
