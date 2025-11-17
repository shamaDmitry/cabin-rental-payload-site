import type { ContactUsFormSection as ContactUsFormSectionProps } from '@/payload-types'

import { FC } from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import { FormBlock } from '@/blocks/Form/Component'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'
import AddressRow from '@/components/AddressRow'

export const ContactUsFormSection: FC<ContactUsFormSectionProps> = (props) => {
  const { headline, description, backgroundImage, form, address } = props

  return (
    <>
      <section className="py-20 relative">
        <div
          className="absolute size-full bg-cover left-0 top-0 -z-10 bg-fixed filter contrast-160 bg-top"
          style={{
            backgroundImage: `url("${getMediaSrc(backgroundImage)}")`,
          }}
        />
        <div className="bg-[#272121b3] absolute left-0 top-0 bottom-0 right-0 -z-10" />

        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-background">
              <Headline className="mb-8">{headline}</Headline>

              <p className="text-lg">{description}</p>

              <div className="table w-full mt-11">
                {address.map((item) => {
                  return <AddressRow key={item.id} label={item.label} content={item.content} />
                })}
              </div>
            </div>

            <div className="bg-background rounded-lg py-10 px-8 min-h-[334px]">
              <FormBlock enableIntro={false} form={form as FormType} />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
