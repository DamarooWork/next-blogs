import { BlogPage as Blog } from '@/views/blogs'

interface Props {
  className?: string
  params: { id: string }
}
export default async function BlogPage({ className, params }: Props) {
  const { id } = await params
  return <Blog className={className} id={id} />
}
