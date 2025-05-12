'use client'
import { signOut } from 'next-auth/react'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui'
import { Menu } from 'lucide-react'
import { Link } from '@/i18n/navigation'

export default function BurgerMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Menu className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Menu burger</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex-col flex" align="end">
        <Link href={'/profile'}>
          <DropdownMenuItem>Профиль</DropdownMenuItem>
        </Link>
        <Link href={'/profile'}>
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </Link>

        <DropdownMenuItem onClick={() => signOut()}>Выйти</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
