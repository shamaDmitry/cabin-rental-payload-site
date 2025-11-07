import Image from 'next/image'
import React, { FC } from 'react'
import Headline from '@/components/core/Headline'
import { cn } from '@/lib/utils'

interface AboutCardProps {
  className?: string
  imageSrc: string
  headline: string
  description: string
}

const AboutCard: FC<AboutCardProps> = ({ className, imageSrc, headline, description }) => {
  return (
    <div className={cn('text-center text-card', className)}>
      <Image
        src={imageSrc}
        alt={headline}
        width={1000}
        height={500}
        className="w-full h-60 rounded-xl mb-4 object-cover"
      />

      <Headline level={4} className="mb-3">
        {headline}
      </Headline>

      <p>{description}</p>
    </div>
  )
}

export default AboutCard
