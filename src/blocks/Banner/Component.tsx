import type { BannerBlock as BannerBlockProps } from 'src/payload-types'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

type Props = {
  className?: string
} & BannerBlockProps

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <div className={cn('mx-auto my-8 w-full', className)}>
      <div
        className={cn('border py-3 px-6 flex items-center rounded', {
          'border-blue-500 bg-blue-500/30 text-blue-900': style === 'info',
          'border-red-500 bg-red-500/30 text-red-900': style === 'error',
          'border-green-500 bg-green-500/30 text-green-900': style === 'success',
          'border-yellow-500 bg-yellow-500/30 text-yellow-900': style === 'warning',
        })}
      >
        <RichText data={content} enableGutter={false} enableProse={false} />
      </div>
    </div>
  )
}
