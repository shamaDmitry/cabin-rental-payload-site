'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Image from 'next/image'
import { FC } from 'react'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import { Media } from '@/payload-types'

interface Slide {
  src?: string | Media | null | undefined
  alt?: string | null
  id?: string | null
}

interface GuestSliderProps {
  slides: Slide[]
}

const GuestSlider: FC<GuestSliderProps> = ({ slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  }

  return (
    <div className="px-7 relative">
      <Slider {...settings}>
        {slides.map((slide) => {
          return (
            <div
              className="aspect-square relative flex items-center justify-center outline-0"
              key={slide.id}
            >
              <Image
                className="object-cover size-full"
                src={getMediaSrc(slide.src)}
                alt={slide.alt || ''}
                width={400}
                height={400}
              />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default GuestSlider
