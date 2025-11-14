import type { ContactContentSection as ContactContentSectionProps, Media } from '@/payload-types'

import React from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import { ContactItem } from '@/blocks/ContactItem/Component'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import { ContactGallery } from '@/blocks/ContactGallery/Component'

export const ContactContentSection: React.FC<ContactContentSectionProps> = (props) => {
  const { headline, description, backgroundImage, listItems, gallery } = props

  return (
    <>
      <section
        className="py-20 bg-center bg-cover"
        style={{
          backgroundImage: `url("${getMediaSrc(backgroundImage)}")`,
        }}
      >
        <Container className="text-center max-w-[770px]">
          <Headline className="mb-8">{headline}</Headline>

          <p className="">{description}</p>

          <div className="mt-11 space-y-8">
            {listItems.map((item) => {
              return <ContactItem key={item.id} {...item} />
            })}
          </div>
        </Container>

        {gallery && (
          <Container className="mx-auto px-4 mt-12">
            {gallery.map((item) => {
              return <ContactGallery key={item.id} images={item.images} />
            })}
          </Container>
        )}
      </section>
    </>
  )
}
