import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { LightBoxGallery } from '@/blocks/LightBoxGallery/Component'
import { RentalSection } from '@/blocks/RentalSection/Component'
import { ActivitiesSection } from '@/blocks/ActivitiesSection/Component'
import { CtaSection } from '@/blocks/CtaSection/Component'
import { FacilitiesSection } from '@/blocks/FacilitiesSection/Component'
import { CafeSection } from '@/blocks/CafeSection/Component'
import { TestimonialSection } from '@/blocks/TestimonialSection/Component'
import { HomeHero } from '@/blocks/HomeHero/Component'
import { ReservationSection } from '@/blocks/ReservationSection/Component'
import { ContentSection } from '@/blocks/ContentSection/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  lightBoxGallery: LightBoxGallery,
  rentalSection: RentalSection,
  activitiesSection: ActivitiesSection,
  ctaSection: CtaSection,
  facilitiesSection: FacilitiesSection,
  cafeSection: CafeSection,
  testimonialSection: TestimonialSection,
  homeHero: HomeHero,
  reservationSection: ReservationSection,
  contentSection: ContentSection,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                // <div className="my-16" key={index}>
                <Fragment key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </Fragment>
                // </div>
              )
            }
          }

          return null
        })}
      </Fragment>
    )
  }

  return null
}
