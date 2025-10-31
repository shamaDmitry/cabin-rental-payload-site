import type { ReservationSection as ReservationSectionProps } from '@/payload-types'

import React from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'

export const ReservationSection: React.FC<
  ReservationSectionProps & {
    id?: string
  }
> = (props) => {
  const { headline } = props

  return (
    <>
      <section className="min-h-80 py-20 relative">
        <div className="absolute size-full left-0 top-0 bg-[#f3f3f217] -z-20" />
        <div
          className="absolute size-full left-0 top-0 -z-10"
          style={{
            background: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d01152af7f5810024cd30c3?nowebp")`,
          }}
        />

        <Container className="text-center text-card">
          <Headline level={2} className="mb-12 text-foreground">
            {headline}
          </Headline>
        </Container>
      </section>
    </>
  )
}
