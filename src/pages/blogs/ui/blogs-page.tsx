'use client'
import { Post } from '@/app/generated/prisma'
import { Container } from '@/shared/components'
import { cn } from '@/shared/lib/utils'
import { Button, ModeToggle } from '@/shared/ui'
import { useQuery } from '@tanstack/react-query'
interface Props {
  className?: string
}
export function BlogsPage({ className }: Props) {
  const { isPending, error, data } = useQuery<Post[]>({
    queryKey: ['blogsData'],
    queryFn: () => fetch('/api/blogs').then((res) => res.json()),
  })
  if (isPending) {
    return <span>Loading...</span>
  }
  return (
    <Container className={cn(className, 'flex flex-col gap-2')}>
      <h1 className="text-red-500 dark:text-yellow-400">Blogs</h1>
      <section>
        <ModeToggle />
      </section>
      <ul>
        {data?.map((blog) => (
          <li key={blog.id}>
            <h2>
              {blog.title} - {blog.content}
            </h2>
          </li>
        ))}
      </ul>
      <Button className="w-fit" variant="default">
        Добавить новый блог
      </Button>
    </Container>
  )
}
