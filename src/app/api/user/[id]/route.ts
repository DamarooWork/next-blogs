import prisma from '@/shared/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET({ params }: { params: { id: string } }) {
  try {
    const paramsData = await params
    const id = Number(paramsData.id)
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })
    return NextResponse.json(user)
  } catch (error) {
    console.log('[USER_GET] Server error', error)
    return NextResponse.json({ error: 'User not found' }, { status: 500 })
  }
}
