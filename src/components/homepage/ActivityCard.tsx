import React, { FC } from 'react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Headline from '@/components/core/Headline'
import { cn } from '@/lib/utils'
import { Media } from '@/payload-types'

interface ActivityCardProps {
  className?: string
  title: string
  price: number
  description: string
  image: Media | string
}

const ActivityCard: FC<ActivityCardProps> = ({ className, title, price, description, image }) => {
  const imageUrl = typeof image === 'string' ? image : image.url

  if (!imageUrl) {
    return null
  }

  return (
    <Card className={cn('p-5', className)}>
      <Image src={imageUrl} alt={title} width={1200} height={200} className="w-full rounded-xl" />

      <Headline as="h5">{title}</Headline>

      <div className="text-primary font-medium text-xl">${price}/hour</div>

      <p>{description}</p>
    </Card>
  )
}

export default ActivityCard
