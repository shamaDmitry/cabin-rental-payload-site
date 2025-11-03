import type { ReservationSection as ReservationSectionProps } from '@/payload-types'

import React from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import { FormBlock } from '@/blocks/Form/Component'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import { Card, CardContent } from '@/components/ui/card'
import RichText from '@/components/RichText'

export const ReservationSection: React.FC<
  ReservationSectionProps & {
    id?: string
  }
> = (props) => {
  const { headline, form, backgroundImage, description } = props

  return (
    <>
      <section className="min-h-80 py-[120px] relative">
        <div className="absolute size-full left-0 top-0 bg-[#f3f3f217] -z-20" />
        <div
          className="absolute size-full left-0 top-0 -z-10 bg-no-repeat bg-cover bg-top"
          style={{
            backgroundImage: `url(${getMediaSrc(backgroundImage)})`,
          }}
        />

        <Container>
          <Card className="text-center max-w-xl mx-auto p-0">
            <CardContent className="py-12 px-16">
              <Headline level={2} className="font-bold mb-8">
                {headline}
              </Headline>

              {description && (
                <RichText
                  className="text-lg mb-12 text-foreground/60"
                  data={description}
                  enableGutter={false}
                />
              )}

              <FormBlock enableIntro={false} form={form as FormType} />
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  )
}
