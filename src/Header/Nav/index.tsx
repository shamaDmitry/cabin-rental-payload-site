'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
// import Link from 'next/link'
// import { SearchIcon } from 'lucide-react'
import { cn } from '@/utilities/ui'

export const HeaderNav: React.FC<{ data: HeaderType; className?: string }> = ({
  data,
  className,
}) => {
  const navItems = data?.navItems || []

  return (
    <>
      <nav className={cn('flex gap-4 justify-center pt-2.5 pb-8', className)}>
        {navItems.map(({ link }, i) => {
          return (
            <CMSLink
              key={i}
              {...link}
              appearance="link"
              className="my-1.5 mx-5 font-semibold text-foreground hover:text-primary"
            />
          )
        })}

        {/* <Link href="/search">
          <span className="sr-only">Search</span>
          <SearchIcon className="w-5 text-primary" />
        </Link> */}
      </nav>
    </>
  )
}
