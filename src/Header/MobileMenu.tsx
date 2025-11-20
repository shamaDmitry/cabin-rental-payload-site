'use client'

import RichText from '@/components/RichText'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { HeaderNav } from './Nav'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/Logo'
import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { Header, Media } from '@/payload-types'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import { usePathname } from 'next/navigation'

interface MobileMenuProps {
  logoData: Media
  navData: Header
  location: DefaultTypedEditorState
  phones: {
    phone: string
    value: string
    id?: string | null
  }[]
}

const MobileMenu: FC<MobileMenuProps> = ({ logoData, navData, location, phones }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <Drawer
      open={isMobileMenuOpen}
      onClose={() => {
        setIsMobileMenuOpen(false)
      }}
    >
      <div className="flex md:hidden items-center justify-between gap-4">
        <Logo href="/" logoData={logoData} />

        <DrawerTrigger asChild className="flex md:hidden">
          <Button
            className="border-0"
            variant={'outline'}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu />
          </Button>
        </DrawerTrigger>
      </div>

      <DrawerContent className="flex md:hidden items-center p-4 h-screen gap-0">
        <DrawerHeader className="sr-only">
          <DrawerTitle className="sr-only">Mobile menu</DrawerTitle>
          <DrawerDescription className="sr-only">Mobile menu</DrawerDescription>
        </DrawerHeader>

        <div className="flex items-center justify-between gap-4 w-full">
          <Logo href="/" logoData={logoData} className="w-40" />

          <DrawerClose asChild>
            <Button variant="outline">
              <X />
            </Button>
          </DrawerClose>
        </div>

        <div className="flex flex-col gap-4 w-full overflow-auto">
          <HeaderNav data={navData} className="flex flex-col gap-0 items-center p-4" />

          <RichText data={location} className="text-center flex flex-col" />

          <div className="flex flex-col items-center text-primary">
            {phones.map((phone) => {
              return (
                <Link key={phone.id} href={`tel:${phone.value}`}>
                  {phone.phone}
                </Link>
              )
            })}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileMenu
