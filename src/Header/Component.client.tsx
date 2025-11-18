'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header, Media } from '@/payload-types'

import { HeaderNav } from './Nav'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import RichText from '@/components/RichText'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const { phones, logo, location } = data
  const logoData = logo as Media

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
      <header className="">
        <div className="">
          <div className="container mx-auto py-8 px-6 md:px-4 max-w-7xl">
            <div className="hidden md:flex items-center justify-between -mx-4">
              <div className="mx-4 w-1/5">
                <RichText data={location} className="text-center flex flex-col" />
              </div>

              <div className="mx-4 flex-1 text-center">
                <Link href="/" className="inline-flex">
                  <Image
                    src={getMediaSrc(logoData)}
                    alt={logoData.alt || ''}
                    width={logoData.width || 181}
                    height={logoData.height || 79}
                  />
                </Link>
              </div>

              <div className="mx-4 w-1/5 flex flex-col items-end text-primary">
                {phones.map((phone) => {
                  return (
                    <Link key={phone.id} href={`tel:${phone.value}`}>
                      {phone.phone}
                    </Link>
                  )
                })}
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
