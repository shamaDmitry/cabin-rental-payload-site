import React from 'react'

import type { CtaFormSection as CtaFormSectionProps } from '@/payload-types'

import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import { FormBlock } from '../Form/Component'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'
import { getMediaSrc } from '@/utilities/getMediaSrc'

export const CtaFormSection: React.FC<CtaFormSectionProps> = (props) => {
  const { headline, description, form, backgroundImage } = props

  return (
    <>
      <section className="py-20 relative">
        <div
          className="absolute size-full bg-cover left-0 top-0 -z-10 bg-fixed filter contrast-160 bg-center"
          style={{
            backgroundImage: `url("${getMediaSrc(backgroundImage)}")`,
          }}
        />
        <div className="bg-[#272121b3] absolute left-0 top-0 bottom-0 right-0 -z-10" />

        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-background">
              <Headline className="mb-8">{headline}</Headline>

              {description && <p className="text-lg">{description}</p>}
            </div>

            <div className="bg-[#282520cc] py-10 px-8">
              <FormBlock enableIntro={false} form={form as FormType} />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
