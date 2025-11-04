import React from 'react'
import List from '@/components/List'
import Image from 'next/image'
import Headline from '@/components/core/Headline'
import { Media, SeasonActivityItem as ListProps } from '@/payload-types'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import { cn } from '@/utilities/ui'

export interface SeasonActivityItemProps {
  media: Media | string
  headline: string
  description: string
  list: ListProps[]
  mediaPosition?: 'start' | 'end'
  className?: string
}

const SeasonActivityItem: React.FC<SeasonActivityItemProps> = ({
  media,
  headline,
  description,
  list,
  mediaPosition,
  className,
}) => {
  const imageUrl = getMediaSrc(media)

  return (
    <div className={cn('grid md:grid-cols-2 gap-8', className)}>
      <figure
        className={cn('rounded-xl overflow-hidden', {
          'order-first': mediaPosition === 'start',
          'order-last': mediaPosition === 'end',
        })}
      >
        <Image
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={headline}
          width={1000}
          height={500}
        />
      </figure>

      <div>
        <Headline level={3} className="mb-5">
          {headline}
        </Headline>

        <p className="mb-5">{description}</p>

        <List data={list} />
      </div>
    </div>
  )
}

export default SeasonActivityItem
