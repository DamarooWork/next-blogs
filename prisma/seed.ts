import { Prisma, PrismaClient } from './generated/prisma'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

const userData: Prisma.UserCreateInput[] = [
  {
    nickmane: 'Alice',
    email: 'alice2@prisma.io',
    password: 'alice',

    blogs: {
      create: [
        {
          title: 'News 1',
          content: {
            create: [{ text: 'Новые новости' }, { text: 'Новые новости' }],
          },
          previewImage:
            'https://i.pinimg.com/736x/cb/6e/0e/cb6e0e9234d879cb482e96fde1ec4c29.jpg',
          published: true,
        },
        {
          title: 'News 2',
          content: {
            create: [{ text: 'Новые новости' }, { text: 'Новые новости' }],
          },
          previewImage:
            'https://i.pinimg.com/736x/cb/6e/0e/cb6e0e9234d879cb482e96fde1ec4c29.jpg',

          published: true,
        },
      ],
    },
  },
  {
    nickmane: 'Bob',
    email: 'bob2@prisma.io',
    password: 'bob',
    blogs: {
      create: [
        {
          title: 'News 3',
          content: {
            create: [{ text: 'Новые новости' }, { text: 'Новые новости' }],
          },
          previewImage:
            'https://i.pinimg.com/736x/cb/6e/0e/cb6e0e9234d879cb482e96fde1ec4c29.jpg',
          published: true,
        },
        {
          title: 'News 4',
          content: {
            create: [{ text: 'Новые новости' }, { text: 'Новые новости' }],
          },
          previewImage:
            'https://i.pinimg.com/736x/cb/6e/0e/cb6e0e9234d879cb482e96fde1ec4c29.jpg',
          published: true,
        },
      ],
    },
  },
]
// async function down() {
//   await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
//   await prisma.$executeRaw`TRUNCATE TABLE "Blog" RESTART IDENTITY CASCADE`
//   await prisma.$executeRaw`TRUNCATE TABLE "Comment" RESTART IDENTITY CASCADE`
//   await prisma.$executeRaw`TRUNCATE TABLE "Like" RESTART IDENTITY CASCADE`
// }
export async function main() {
  // await down()
  for (const u of userData) {
    await prisma.user.create({ data: u })
  }
}

main()
