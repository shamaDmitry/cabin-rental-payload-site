import type { ContactGallery as ContactGalleryProps, Media } from '@/payload-types'

import React from 'react'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import Image from 'next/image'

export const ContactGallery: React.FC<Pick<ContactGalleryProps, 'images'>> = (props) => {
  const { images } = props

  const firstImage = images[0].image as Media

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="row-span-2">
          <Image
            className="size-full object-cover rounded-lg max-h-[520px]"
            src={getMediaSrc(firstImage)}
            alt={firstImage.alt || ''}
            width={firstImage.width || 1000}
            height={firstImage.height || 1000}
          />
        </div>

        <div className="flex flex-col gap-5 row-span-2">
          {images.map((item, index) => {
            if (index === 0) return null

            const image = item.image as Media

            return (
              <Image
                key={item.id}
                className="object-cover max-h-[250px] rounded-lg h-full"
                src={getMediaSrc(image)}
                alt={image.alt || ''}
                width={image.width || 1000}
                height={image.height || 1000}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
