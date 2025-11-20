'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header, Media } from '@/payload-types'

import { HeaderNav } from './Nav'
import RichText from '@/components/RichText'
import Logo from '@/components/Logo'
import MobileMenu from './MobileMenu'

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

  console.log('data client', data)

  return (
    <>
      <header className="">
        <div className="container mx-auto md:py-8 p-6 md:px-4 max-w-7xl">
          <div className="hidden md:flex items-center justify-between -mx-4">
            <div className="mx-4 w-1/5">
              <RichText data={location} className="text-center flex flex-col" />
            </div>

            <div className="mx-4 flex-1 text-center">
              <Logo href="/" logoData={logoData} />
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

          <MobileMenu location={location} logoData={logoData} navData={data} phones={phones} />
        </div>

        <HeaderNav data={data} className="hidden md:flex" />
      </header>
    </>
  )
}
