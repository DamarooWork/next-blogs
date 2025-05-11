'use client'
import { signOut } from 'next-auth/react'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui'
import { Earth, Globe } from 'lucide-react'
import Link from 'next/link'
interface Props {
  className?: string
}
export default function LanguageSelector({ className }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Language selector</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex-col flex" align="end">
        <DropdownMenuItem>Русский</DropdownMenuItem>
        <DropdownMenuItem>English</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
