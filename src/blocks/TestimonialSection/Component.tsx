import type { TestimonialSection as TestimonialSectionProps } from '@/payload-types'

import React from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import Image from 'next/image'
import { CMSLink } from '@/components/Link'

export const TestimonialSection: React.FC<
  TestimonialSectionProps & {
    id?: string
  }
> = (props) => {
  const { headline, images, link } = props

  return (
    <>
      <section className="min-h-80 py-20 text-center relative">
        <div className="absolute size-full left-0 top-0 bg-muted -z-20" />

        <div
          className="absolute size-full left-0 top-0 -z-10 bg-no-repeat bg-position-[43%_13%] bg-cover"
          style={{
            backgroundImage: `url(https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00faf8525dfe002370a5bb?nowebp)`,
          }}
        />

        <Container>
          <Headline level={2} className="mb-12">
            {headline}
          </Headline>

          <div className="grid grid-cols-3 gap-9">
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src={
                  'https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5ce4ed6072358b0023fd23c4_optimized_930.webp'
                }
                alt=""
                width={330}
                height={440}
                className="w-full rounded-lg"
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src={
                  'https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5ce4eecd4045b7002355d9cf_optimized_1521_c1521x854-0x0.webp'
                }
                alt=""
                width={330}
                height={180}
                className="w-full rounded-lg"
              />

              <Image
                src={
                  'https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5ce501f4afdbc10023bc0acc_optimized_1396.webp'
                }
                alt=""
                width={330}
                height={240}
                className="w-full rounded-lg"
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src={
                  'https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5ce5016adc5e3800248d1b73_optimized_1396.webp'
                }
                alt=""
                width={330}
                height={260}
                className="w-full rounded-lg"
              />
              <Image
                src={
                  'https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5ce5025818e9a600245d9a15_optimized_1316_c1316x987-0x0.webp'
                }
                alt=""
                width={330}
                height={160}
                className="w-full rounded-lg"
              />
            </div>
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
