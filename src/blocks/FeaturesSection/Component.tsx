import type {
  AboutCard as AboutCardProps,
  FeaturesSection as FeaturesSectionProps,
} from '@/payload-types'

import React from 'react'
import Container from '@/components/core/Container'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import AboutCard from '@/components/about/AboutCard'

export const FeaturesSection: React.FC<
  FeaturesSectionProps & {
    id?: string
  }
> = (props) => {
  const { description, cards } = props
  const data = cards as AboutCardProps[]

  return (
    <>
      <section
        className="py-[120px]"
        style={{
          background: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d010336d6148d00231fdb7a?nowebp")`,
        }}
      >
        <Container className="text-center text-background">
          <p className="mb-12">{description}</p>

          {data && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.map((card) => {
                return (
                  <AboutCard
                    key={card.id}
                    imageSrc={getMediaSrc(card.image)}
                    headline={card.headline}
                    description={card.description}
                  />
                )
              })}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
