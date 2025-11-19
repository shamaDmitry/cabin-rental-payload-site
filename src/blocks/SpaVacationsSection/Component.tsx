import type { Media, SpaVacationsSection as SpaVacationsSectionProps } from '@/payload-types'

import React from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import Image from 'next/image'
import { getMediaSrc } from '@/utilities/getMediaSrc'

export const SpaVacationsSection: React.FC<
  SpaVacationsSectionProps & {
    id?: string
  }
> = (props) => {
  const { headline, description, media, backgroundImage } = props

  const imageData = media as Media

  return (
    <>
      <section
        className="py-20"
        style={{
          backgroundImage: `url("${getMediaSrc(backgroundImage)}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container className="text-center">
          <Headline level={2} className="mb-2">
            {headline}
          </Headline>

          <p className="mb-12">{description}</p>

          <figure className="rounded-lg overflow-hidden">
            <Image
              className="w-full max-h-[380px] object-cover"
              src={getMediaSrc(media)}
              alt={headline}
              width={imageData.width || 1000}
              height={imageData.height || 500}
            />
          </figure>
        </Container>
      </section>
    </>
  )
}
