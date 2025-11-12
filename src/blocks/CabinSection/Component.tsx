import type { Cabin, CabinSection as CabinSectionProps } from '@/payload-types'

import React from 'react'
import Container from '@/components/core/Container'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import Headline from '@/components/core/Headline'
import CabinCard from '@/components/acommodation/CabinCard'

export const CabinSection: React.FC<CabinSectionProps> = (props) => {
  const { headline, backgroundImage, cabin } = props

  return (
    <>
      <section
        className="py-20"
        style={{
          backgroundImage: `url(${getMediaSrc(backgroundImage)})`,
        }}
      >
        {headline && <Headline className="text-center mb-12">{headline}</Headline>}

        <Container>
          <CabinCard data={cabin as Cabin} />
        </Container>
      </section>
    </>
  )
}
