'use client'

import { FC, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import NextJsImage from '@/components/gallery/NextJsImage'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import { Media } from '@/payload-types'
import { getMediaSrc } from '@/utilities/getMediaSrc'

interface GalleryLightboxProps {
  slides: Media[]
}

const GalleryLightbox: FC<GalleryLightboxProps> = ({ slides }) => {
  const [, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)

  return (
    <div>
      <div className="grid grid-cols-12 gap-y-8 grid-rows-2">
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={cn('col-span-4 overflow-hidden rounded-lg mx-4', {
                'col-span-8 row-span-2': index % 6 === 0 || index % 6 === 4,
              })}
            >
              <Image
                className="cursor-pointer size-full object-cover"
                src={getMediaSrc(slide)}
                alt=""
                width={1000}
                height={500}
                onClick={() => {
                  setOpen(true)
                  setIndex(index)
                }}
              />
            </div>
          )
        })}
      </div>

      <Lightbox
        plugins={[Zoom]}
        index={index}
        open={index >= 0}
        close={() => {
          setOpen(false)
          setIndex(-1)
        }}
        slides={slides.map((slide) => ({
          src: getMediaSrc(slide),
          alt: slide.alt || '',
        }))}
        render={{ slide: NextJsImage }}
      />
    </div>
  )
}

export default GalleryLightbox
