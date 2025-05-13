'use client'
import { Container } from '@/shared/components'
import { useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'
import { Blog } from 'prisma/generated'

interface Props {
  className?: string
  id: string
}
export function BlogPage({ className, id }: Props) {
  const { isPending, error, data } = useQuery<Blog>({
    queryKey: ['blogData'],
    queryFn: () => fetch('/api/blogs/' + id).then((res) => res.json()),
  })
  
  if (error){
    notFound()
  }
  return (
    <Container className={className}>
      <h1 className='text-4xl'>Blog #{id}</h1>

      {isPending && <span>Loading...</span>}
      {error && <span>Error</span>}
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
        </>
      )}
    </Container>
  )
}
