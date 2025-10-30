import type { CafeSection as CafeSectionProps, CafeCard as CafeCardTypes } from '@/payload-types'

import React from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import CafeCard from '@/components/homepage/CafeCard'
import RichText from '@/components/RichText'
import { getMediaSrc } from '@/utilities/getMediaSrc'

export const CafeSection: React.FC<
  CafeSectionProps & {
    id?: string
  }
> = (props) => {
  const { headline, description, backgroundImage, cards } = props

  const imageSrc = getMediaSrc(backgroundImage)
  const data = (cards as CafeCardTypes[]) || []

  return (
    <>
      <section className="min-h-80 py-[110px] relative text-center">
        <div className="absolute size-full left-0 top-0 bg-secondary -z-20" />

        <div
          className="absolute size-full left-0 top-0 -z-10 bg-no-repeat bg-position-[43%_13%] bg-cover"
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        />

        <Container className="text-background">
          <Headline className="mb-8">{headline}</Headline>

          {description && (
            <RichText
              className="max-w-3xl mx-auto text-lg text-helper mb-8"
              data={description}
              enableGutter={false}
            />
          )}

          {!data.length && <p>No cards available</p>}

          {data.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {data.map((card) => {
                return (
                  <CafeCard
                    key={card.id}
                    headline={card.headline}
                    description={card.description}
                    imageSrc={getMediaSrc(card.image)}
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
