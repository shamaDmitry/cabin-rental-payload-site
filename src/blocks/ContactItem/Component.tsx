import type { ContactItem as ContactItemProps } from '@/payload-types'

import React from 'react'
import * as LucideIcons from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import Headline from '@/components/core/Headline'

export const ContactItem: React.FC<ContactItemProps> = (props) => {
  const { icon, iconSize, title, body } = props

  const Icon = icon
    ? (LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>)[icon]
    : null

  return (
    <>
      <div className="flex flex-row gap-5">
        <div className="rounded-full size-[50px] md:size-[70px] flex items-center justify-center bg-background shadow shrink-0 text-primary">
          {Icon && <Icon size={iconSize as string} />}
        </div>

        <div className="text-left">
          <Headline className="text-lg font-bold mb-5">{title}</Headline>

          <div className="">{body}</div>
        </div>
      </div>
    </>
  )
}
