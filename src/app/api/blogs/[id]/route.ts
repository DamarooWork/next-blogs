import prisma from '@/shared/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET({ params }: { params: { id: string } }) {
  try {
    const paramsData = await params
    const id = Number(paramsData.id)
    const blog = await prisma.post.findUnique({
      where: {
        id,
      },
    })
    return NextResponse.json(blog)
  
  } catch (error) {
    console.log('[BLOG_GET] Server error', error)
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
  }
}


