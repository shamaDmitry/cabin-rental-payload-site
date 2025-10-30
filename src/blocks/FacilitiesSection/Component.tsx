import type { FacilitiesSection as FacilitiesSectionProps } from '@/payload-types'

import React from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import Image from 'next/image'
import { getMediaSrc } from '@/utilities/getMediaSrc'

export const FacilitiesSection: React.FC<
  FacilitiesSectionProps & {
    id?: string
  }
> = (props) => {
  const { headline, image } = props
  const imageSrc = getMediaSrc(image)

  return (
    <>
      <section className="min-h-80 py-20">
        <Container className="text-center max-w-4xl">
          <Headline className="mb-12">{headline}</Headline>

          <figure className="overflow-hidden rounded-xl">
            <Image src={imageSrc} alt={headline} width={1000} height={450} className="w-full" />
          </figure>
        </Container>
      </section>
    </>
  )
}
