import React from 'react'

import type { SliderSection as SliderSectionProps } from '@/payload-types'

import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import GuestSlider from '@/components/gallery/GuestSlider'
import { getMediaSrc } from '@/utilities/getMediaSrc'

export const SliderSection: React.FC<SliderSectionProps> = (props) => {
  const { headline, slides, backgroundImage } = props

  return (
    <>
      <section
        className="min-h-80 py-20 text-background"
        style={{
          background: `url("${getMediaSrc(backgroundImage)}")`,
        }}
      >
        <Container>
          <Headline className="mb-14 text-center ">{headline}</Headline>

          <GuestSlider slides={slides} />
        </Container>
      </section>
    </>
  )
}
