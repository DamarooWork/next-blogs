import { Container } from '@/shared/components'
import { cn } from '@/shared/lib/utils'
import { Button, ModeToggle } from '@/shared/ui'
import BurgerMenu from './burger-menu'
import LanguageSelector from './language-selector'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

interface Props {
  className?: string
}
export function BlogsHeader({ className }: Props) {
  const t = useTranslations('header')
  return (
    <header
      className={cn(
        className,
        'sticky top-0 left-0 w-full  my-auto border-b-2 shadow-md shadow-foreground/10 backdrop-blur-sm bg-background/80 dark:bg-background/80 dark:border-b-foreground/20'
      )}
    >
      <Container className="flex justify-between items-center">
        <Link href={'/'} className="text-4xl italic font-bold">
          BLOGS
        </Link>
        <section className="flex gap-2">
          <Button variant="outline" className="text-md">
            {t('btn_new_blog')}
          </Button>
          <LanguageSelector />
          <ModeToggle />
          <BurgerMenu />
        </section>
      </Container>
    </header>
  )
}
