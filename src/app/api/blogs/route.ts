import prisma from '@/shared/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const blogs = await prisma.post.findMany()
    return NextResponse.json(blogs)
  } catch (error) {
    console.log('[BLOGS_GET] Server error', error)
    return NextResponse.json({ error: 'Failed to get blogs' }, { status: 500 })
  }
}
