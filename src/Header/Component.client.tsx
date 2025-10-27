'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <>
      {/* <header className="container relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
        <div className="py-8 flex justify-between">
          <Link href="/">
            <Logo loading="eager" priority="high" className="invert dark:invert-0" />
          </Link>

          <HeaderNav data={data} />
        </div>
      </header> */}

      <header className="">
        <div className="">
          <div className="container mx-auto py-8 px-6 md:px-4 max-w-7xl">
            <div className="hidden md:flex items-center justify-between -mx-4">
              <div className="mx-4 w-1/5">
                <p className="text-center flex flex-col">
                  <span>Yosemite Mariposa</span>
                  <span>County, Ca, USA</span>
                </p>
              </div>

              <div className="mx-4 flex-1 text-center">
                <Link href="/" className="inline-flex">
                  <Image src="/images/logo.webp" alt="logo" width={181} height={79} />
                </Link>
              </div>

              <div className="mx-4 w-1/5 flex flex-col items-end text-primary">
                <Link href="tel:+12345678900">+1 (234) 567 89 00</Link>
                <Link href="tel:+12345678901">+1 (234) 567 89 01</Link>
              </div>
            </div>

            <div className="flex md:hidden items-center justify-between gap-4">
              <Link href="/" className="inline-flex">
                <Image src="/images/logo.webp" alt="logo" width={181} height={79} />
              </Link>

              <Button className="border-0" variant={'outline'}>
                <Menu />
              </Button>
            </div>
          </div>
        </div>

        <HeaderNav data={data} className="hidden md:flex" />
      </header>
    </>
  )
}
