import type { HomeHero as HomeHeroProps } from '@/payload-types'

import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'

import React from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import { Card } from '@/components/ui/card'
import { CardContent } from '@/components/ui/card'
import { FormBlock } from '@/blocks/Form/Component'

export const HomeHero: React.FC<
  HomeHeroProps & {
    id?: string
  }
> = (props) => {
  const { headline, description, bgImage, form } = props

  return (
    <>
      <section
        className="min-h-80 py-[140px]"
        style={{
          background: '45.31% 26.32% / cover no-repeat, rgb(89, 150, 115)',
          backgroundImage: `url(${getMediaSrc(bgImage)})`,
        }}
      >
        <Container>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-start-2 md:max-w-md w-full md:ml-auto">
              <Card className="p-14 px-10">
                <CardContent className="text-center p-0">
                  <Headline level={3} className="mb-3">
                    {headline}
                  </Headline>

                  {description && (
                    <p className="md:max-w-11/12 mx-auto mb-5 text-foreground/60">{description}</p>
                  )}

                  <FormBlock enableIntro={true} form={form as FormType} />
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
