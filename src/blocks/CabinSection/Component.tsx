import type { ContentSection as ContentSectionProps } from '@/payload-types'

import React from 'react'
import Container from '@/components/core/Container'
import RichText from '@/components/RichText'
import { getMediaSrc } from '@/utilities/getMediaSrc'

export const CabinSection: React.FC<
  ContentSectionProps & {
    id?: string
  }
> = (props) => {
  const { backgroundImage, content } = props

  return (
    <>
      <section
        className="py-20"
        style={{
          backgroundImage: `url("${getMediaSrc(backgroundImage)}")`,
        }}
      >
        <Container>{content && <RichText data={content} />}</Container>
      </section>
    </>
  )
}
