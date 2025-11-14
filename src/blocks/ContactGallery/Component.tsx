import type { ContactGallery as ContactGalleryProps, Media } from '@/payload-types'

import React from 'react'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import Image from 'next/image'

export const ContactGallery: React.FC<Pick<ContactGalleryProps, 'images'>> = (props) => {
  const { images } = props

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="row-span-2">
          <Image
            className="size-full object-cover rounded-lg max-h-[520px]"
            src={getMediaSrc(images[0].image)}
            alt={images[0].image.alt}
            width={images[0].image.width}
            height={images[0].image.height}
          />
        </div>

        <div className="flex flex-col gap-5 row-span-2">
          {images.map((item, index) => {
            console.log('item222', item.image)

            if (index === 0) return null

            return (
              <Image
                key={item.id}
                className="object-cover max-h-[250px] rounded-lg h-full"
                src={getMediaSrc(item.image)}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
