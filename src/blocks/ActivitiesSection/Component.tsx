import type { ActivitiesSection as ActivitiesSectionProps, Activity } from '@/payload-types'

import React from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import ActivityCard from '@/components/homepage/ActivityCard'

export const ActivitiesSection: React.FC<
  ActivitiesSectionProps & {
    id?: string
  }
> = (props) => {
  const { headline, activities } = props

  const data: Activity[] = (activities as Activity[]) || []

  return (
    <>
      <section className="min-h-80 py-20 relative">
        <div className="absolute size-full left-0 top-0 bg-[#f3f3f217] -z-20" />
        <div
          className="absolute size-full left-0 top-0 -z-10"
          style={{
            background: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d01152af7f5810024cd30c3?nowebp")`,
          }}
        />

        <Container className="text-center text-card">
          <Headline level={2} className="mb-12 text-foreground">
            {headline}
          </Headline>

          {!activities.length && <p>No activities found</p>}

          {activities.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {data.map((activity) => {
                return (
                  <ActivityCard
                    key={activity.id}
                    title={activity.title}
                    price={activity.price}
                    description={activity.description}
                    image={activity.image}
                  />
                )
              })}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
