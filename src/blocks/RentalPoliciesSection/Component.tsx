import type { RentalPoliciesSection as RentalPoliciesSectionProps } from '@/payload-types'

import React from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import ContactRow from '@/components/ContactRow'
import RichText from '@/components/RichText'

export const RentalPoliciesSection: React.FC<RentalPoliciesSectionProps> = (props) => {
  const { headline, backgroundImage, contacts, content } = props

  return (
    <>
      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url("${getMediaSrc(backgroundImage)}")`,
        }}
      >
        <Container className="text-center">
          <Headline className="mb-8">{headline}</Headline>

          {contacts && (
            <>
              <p className="text-lg mb-1">For all questions refer to</p>

              <div className="text-lg mb-12 space-y-1">
                {contacts.map((item) => {
                  return <ContactRow key={item.id} name={item.name} phoneNumber={item.phone} />
                })}
              </div>
            </>
          )}

          {content && <RichText data={content} enableGutter={false} className="mt-11" />}
        </Container>
      </section>
    </>
  )
}
