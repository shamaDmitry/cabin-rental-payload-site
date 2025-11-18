import type { Media, TestimonialSection as TestimonialSectionProps } from '@/payload-types'

import React from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import Image from 'next/image'
import { CMSLink } from '@/components/Link'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import { cn } from '@/utilities/ui'

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

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3 md:gap-9 mb-5 md:max-h-[600px]">
            {images.map((item) => {
              const image = item.image as Media

              return (
                <Image
                  key={image.id}
                  src={getMediaSrc(image)}
                  alt=""
                  width={image.width || 300}
                  height={image.height || 200}
                  className={cn('w-full rounded-lg h-full object-cover', {
                    'col-span-1': item.colSpan === 1,
                    'col-span-2': item.colSpan === 2,
                    'col-span-3': item.colSpan === 3,
                    'row-span-1': item.rowSpan === 1,
                    'row-span-2': item.rowSpan === 2,
                    'row-span-3': item.rowSpan === 3,
                  })}
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
