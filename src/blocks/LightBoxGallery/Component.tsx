import type { LightBoxGallery as LightBoxCardProps } from '@/payload-types'

import React from 'react'
import RichText from '@/components/RichText'
import Headline from '@/components/core/Headline'
import 'yet-another-react-lightbox/styles.css'
import LightBoxCard from '@/components/LightBoxCard'
import Container from '@/components/core/Container'

export const LightBoxGallery: React.FC<
  LightBoxCardProps & {
    id?: string
  }
> = (props) => {
  const { content, headline, description, backgroundImage, id } = props

  const imageUrl = typeof backgroundImage === 'string' ? backgroundImage : backgroundImage?.url

  if (!content) {
    return <p>Nothing is here</p>
  }

  return (
    <>
      <section
        id={`light-box-gallery-${id}`}
        className="text-center py-20"
        style={{
          background: `url('${imageUrl}') 10.31% 73.54% / cover no-repeat, rgb(243, 243, 242)`,
        }}
      >
        <Container className="max-w-5xl">
          <Headline as="h2" className="mb-5">
            {headline}
          </Headline>

          <div className="mx-auto mb-8 text-lg text-foreground/60">
            {description && <RichText className="mb-0" data={description} enableGutter={false} />}
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {content.map((card, index) => {
              return <LightBoxCard key={index} headline={card.title} image={card.media} />
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
