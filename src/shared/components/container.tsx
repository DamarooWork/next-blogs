import { cn } from '@/shared/lib/utils'

interface Props {
  className?: string
  children: React.ReactNode
}

export const Container = ({ className, children }: Props) => {
  return (
    <section className={cn('mx-auto max-w-[1536px] px-4 2xl:px-10', className)}>
      {children}
    </section>
  )
}
