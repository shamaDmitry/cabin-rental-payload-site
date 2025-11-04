import type { AboutHero as AboutHeroProps } from '@/payload-types'

import React from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import Image from 'next/image'
import RichText from '@/components/RichText'

export const AboutHero: React.FC<
  AboutHeroProps & {
    id?: string
  }
> = (props) => {
  const { bgImage, headline, subHeadline, mainImage, body } = props

  return (
    <>
      <section
        className="py-20"
        style={{
          backgroundImage: `url("${getMediaSrc(bgImage)}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container className="text-center">
          <Image
            src={getMediaSrc(mainImage)}
            alt=""
            width={1000}
            height={500}
            className="w-full rounded-lg mb-5 max-w-6xl mx-auto"
          />

          <Headline level={2} className="mb-8">
            {headline}
          </Headline>

          <p className="text-lg mb-8">{subHeadline}</p>

          {body && <RichText className="max-w-6xl mx-auto" data={body} enableGutter={true} />}
        </Container>
      </section>
    </>
  )
}
