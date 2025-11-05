import type {
  SeasonActivitiesSection as SeasonActivitiesSectionProps,
  SeasonActivityItem as SeasonActivityItemProps,
} from '@/payload-types'

import React from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import SeasonActivityItem from '@/components/about/SeasonActivityItem'

export const SeasonActivitiesSection: React.FC<
  SeasonActivitiesSectionProps & {
    id?: string
  }
> = (props) => {
  const { headline, seasonActivities, backgroundImage } = props

  return (
    <>
      <section
        className="py-20"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <Headline className="mb-8 text-center" level={2}>
            {headline}
          </Headline>

          {seasonActivities?.map((activity) => {
            if (typeof activity === 'string') return null

            return (
              <SeasonActivityItem
                className="pb-20 last-of-type:pb-0"
                key={activity.id}
                media={activity.image}
                headline={activity.headline || ''}
                description={activity.description ?? ''}
                list={activity.list as SeasonActivityItemProps[]}
                mediaPosition={activity.mediaPosition}
              />
            )
          })}
        </Container>
      </section>
    </>
  )
}
