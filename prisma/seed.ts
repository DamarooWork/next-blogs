import { Prisma, PrismaClient } from './generated/prisma'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alice',
    email: 'alice1@prisma.io',
    blogs: {
      create: [
        {
          title: 'Join the Prisma Discord',
          content: 'https://pris.ly/discord',
          published: true,
        },
        {
          title: 'Prisma on YouTube',
          content: 'https://pris.ly/youtube',
        },
      ],
    },
  },
  {
    name: 'Bob',
    email: 'bob1@prisma.io',
    blogs: {
      create: [
        {
          title: 'Follow Prisma on Twitter',
          content: 'https://www.twitter.com/prisma',
          published: true,
        },
      ],
    },
  }
]

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u })
  }
}

main()