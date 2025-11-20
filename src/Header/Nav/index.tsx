'use client'

import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'
import { usePathname } from 'next/navigation'

export const HeaderNav: React.FC<{ data: HeaderType; className?: string }> = ({
  data,
  className,
}) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()

  const isActiveLink = (
    link: NonNullable<HeaderType['navItems']>[number]['link'],
    pathname: string,
  ) => {
    if (link?.type === 'custom') {
      return link.url && pathname.includes(link.url)
    }

    if (link?.type === 'reference') {
      const reference = link.reference
      return (
        reference &&
        typeof reference.value === 'object' &&
        reference.value.slug &&
        pathname.includes(reference.value.slug)
      )
    }

    return false
  }

  return (
    <>
      <nav className={cn('flex gap-4 justify-center pt-2.5 pb-8', className)}>
        {navItems.map(({ link }, i) => {
          return (
            <CMSLink
              key={i}
              {...link}
              size={'clean'}
              appearance="link"
              className={cn(
                'hover:no-underline my-1.5 mx-5 font-semibold text-foreground hover:text-primary capitalize text-base p-0 border-b border-transparent rounded-none hover:border-b hover:border-primary',
                {
                  'text-primary border-primary': isActiveLink(link, pathname),
                },
              )}
            />
          )
        })}
      </nav>
    </>
  )
}
