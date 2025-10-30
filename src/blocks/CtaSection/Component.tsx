import React from 'react'

import type { CtaSection as CtaSectionProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Headline from '@/components/core/Headline'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const CtaSection: React.FC<CtaSectionProps> = (props) => {
  const { title, links, bgImage } = props

  const imageUrl = typeof bgImage === 'string' ? bgImage : bgImage?.url

  return (
    <section className="min-h-80 py-[180px] px-4 relative text-center">
      <div className="absolute size-full left-0 top-0 bg-secondary -z-20" />

      <div
        className="absolute size-full left-0 top-0 -z-10 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      />

      <Headline className="text-5xl text-background mb-14">{title}</Headline>

      <div className="flex gap-5 justify-center">
        {links?.map((link) => {
          return <CMSLink key={link.id} {...link} />
        })}
      </div>

      <div className="flex gap-5 justify-center">
        <Button
          asChild
          size={'2xl'}
          className="rounded-full hover:bg-background hover:text-foreground"
        >
          <Link href="tel:+123456789">Call us</Link>
        </Button>

        <Button
          asChild
          variant={'outline'}
          size={'2xl'}
          className="rounded-full hover:bg-background hover:text-foreground text-background"
        >
          <Link href="#">Reservation</Link>
        </Button>
      </div>
    </section>
  )
}
