import type { ContactItem as ContactItemProps } from '@/payload-types'

import React from 'react'
import * as LucideIcons from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { distribute } from '@/hooks/distribute'

export const ContactItem: React.FC<ContactItemProps> = (props) => {
  const { icon } = props

  // console.log('props', props.icon.icon)
  // console.log('LucideIcons', LucideIcons)

  const Icon = icon
    ? (LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>)[icon.icon]
    : null

  // console.log('Icon', Icon)

  console.log('distribute', distribute(10, 2, 2, 2))

  return (
    <>
      <div className="flex flex-row gap-5">
        <div className="rounded-full size-[50px] md:size-[70px] flex items-center justify-center bg-background shadow shrink-0 text-primary">
          {/* {icon} */}
          {Icon && <Icon />}
        </div>

        <div className="text-left">
          {/* <Headline className="text-lg font-bold mb-5">{title}</Headline> */}

          {/* <div className="">{description}</div> */}
        </div>
      </div>
    </>
  )
}
