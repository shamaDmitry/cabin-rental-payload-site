import type { Cabin, RentalSection as RentalSectionProps } from '@/payload-types'

import React from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import RentalCard from '@/components/homepage/RentalCard'
import { CMSLink } from '@/components/Link'

export const RentalSection: React.FC<
  RentalSectionProps & {
    id?: string
  }
> = (props) => {
  const { cabins, headline, action } = props
  const data: Cabin[] = (cabins as Cabin[]) || []

  return (
    <>
      <section
        className="min-h-80 py-[140px]"
        style={{
          background: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00cfdbe885cb00231936b3?nowebp")`,
        }}
      >
        <Container className="text-center text-card">
          <Headline level={2} className="mb-12">
            {headline}
          </Headline>

          {!data.length && <p className="mb-12">No cabins available</p>}

          {data.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-12">
              {data.map((cabin) => {
                return (
                  <RentalCard
                    key={cabin.id}
                    title={cabin.title}
                    price={cabin.price}
                    description={cabin.details
                      .filter((item) => typeof item !== 'string')
                      .slice(0, 3)
                      .map((item) => item.title)
                      .join(', ')}
                    bgImage={cabin.bgImage || ''}
                    href="/accommodation"
                  />
                )
              })}
            </div>
          )}

          {data.length > 0 && <CMSLink {...action} />}
        </Container>
      </section>
    </>
  )
}
