import { Media } from '@/payload-types'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import { cn } from '@/utilities/ui'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type LogoProps = { logoData: Media; href: string; className?: string }

const Logo = ({ logoData, href, className }: LogoProps) => {
  return (
    <Link href={href} className={cn('inline-flex', className)}>
      <Image
        priority
        src={getMediaSrc(logoData)}
        alt={logoData.alt || ''}
        width={logoData.width || 181}
        height={logoData.height || 79}
      />
    </Link>
  )
}

export default Logo
