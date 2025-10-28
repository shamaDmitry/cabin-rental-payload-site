import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import Container from '@/components/core/Container'
import Image from 'next/image'
import Headline from '@/components/core/Headline'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []
  const socialItems = footerData?.socialLinks || []

  return (
    <>
      <footer>
        <Container>
          <div className="flex items-center gap-4 pt-20 pb-4">
            <div className="w-full max-w-3xs">
              <Link href="/" className="inline-flex">
                <Image src="/images/logo.webp" alt="logo" width={146} height={62} />
              </Link>
            </div>

            <div className="flex-1">
              <nav className="grid grid-cols-3 gap-4">
                {navItems.map(({ link }, i) => {
                  return (
                    <CMSLink className="whitespace-nowrap hover:text-primary" key={i} {...link} />
                  )
                })}
              </nav>
            </div>

            <div className="text-right">
              <Headline level={5} className="mb-4">
                Follow Us
              </Headline>

              <div className="flex flex-wrap justify-end gap-4">
                {socialItems.map(({ link }, i) => {
                  return (
                    <CMSLink
                      size="icon"
                      className="bg-secondary rounded-full size-8 flex items-center justify-center text-background hover:bg-primary transition-colors"
                      key={i}
                      {...link}
                      label={null}
                      iconSize={link.iconSize}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs py-4">
            <p>&copy; Created by</p>
            <p>All rights Reserved</p>

            <ThemeSelector />
          </div>
        </Container>
      </footer>
    </>
  )
}
