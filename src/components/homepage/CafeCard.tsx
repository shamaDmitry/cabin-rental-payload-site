import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Headline from '@/components/core/Headline'
import { FC } from 'react'
import { cn } from '@/lib/utils'

interface CafeCardProps {
  className?: string
  headline: string
  description: string
  imageSrc: string
}

const CafeCard: FC<CafeCardProps> = ({ className, headline, description, imageSrc }) => {
  return (
    <Card className={cn('py-5 bg-white/10 text-background border-0', className)}>
      <CardContent className="px-5">
        <Image
          src={imageSrc}
          alt={headline}
          width={530}
          height={300}
          className="w-full rounded-xl mb-5 h-80 object-cover"
        />

        <Headline level={3} className="mb-4">
          {headline}
        </Headline>

        <p className="text-helper">{description}</p>
      </CardContent>
    </Card>
  )
}

export default CafeCard
