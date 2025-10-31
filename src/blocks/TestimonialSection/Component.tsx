import type { TestimonialSection as TestimonialSectionProps } from '@/payload-types'

import React from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import Image from 'next/image'
import { CMSLink } from '@/components/Link'
import { getMediaSrc } from '@/utilities/getMediaSrc'

export const TestimonialSection: React.FC<
  TestimonialSectionProps & {
    id?: string
  }
> = (props) => {
  const { headline, images, link, bgImage } = props

  return (
    <>
      <section className="min-h-80 py-20 text-center relative">
        <div className="absolute size-full left-0 top-0 bg-muted -z-20" />

        {bgImage && (
          <div
            className="absolute size-full left-0 top-0 -z-10 bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url(${getMediaSrc(bgImage)})`,
            }}
          />
        )}

        <Container>
          <Headline level={2} className="mb-12">
            {headline}
          </Headline>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-9 mb-5">
            {images.map((image) => {
              return (
                <Image
                  key={image.id}
                  src={getMediaSrc(image.image)}
                  alt=""
                  width={330}
                  height={440}
                  className="w-full rounded-lg"
                />
              )
            })}
          </div>

          <CMSLink
            {...link}
            className="border-secondary text-foreground hover:bg-secondary hover:text-background"
          />
        </Container>
      </section>
    </>
  )
}
