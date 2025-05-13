'use client'
import { Link } from '@/i18n/navigation'
import { Container } from '@/shared/components'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { Blog } from 'prisma/generated'
interface Props {
  className?: string
}

export function BlogsPage({ className }: Props) {
  const t = useTranslations('home')
  const { isPending, error, data } = useQuery<Blog[]>({
    queryKey: ['blogsData'],
    queryFn: () => fetch('/api/blogs').then((res) => res.json()),
  })

  return (
    <Container className={cn(className, 'flex flex-col gap-2 my-4 lg:mt-10')}>
      <h1 className="text-red-500 dark:text-yellow-400">{t('blogs')}</h1>
      {isPending && <span>Loading...</span>}
      {error && <span>Error</span>}
      {data?.length && (
        <ul>
          {data?.map((blog) => (
            <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <h2>
                {blog.title} - {blog.content}
              </h2>
            </Link>
            </li>
          ))}
        </ul>
      )}

      <Button className="w-fit" variant="default">
        Добавить новый блог
      </Button>
    </Container>
  )
}
