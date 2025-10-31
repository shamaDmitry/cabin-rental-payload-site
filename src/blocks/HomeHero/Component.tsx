import type { HomeHero as HomeHeroProps } from '@/payload-types'

import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'

import React from 'react'
import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import { Card } from '@/components/ui/card'
import { CardContent } from '@/components/ui/card'
// import OrderCallForm from '@/components/homepage/OrderForm'
import { FormBlock } from '../Form/Component'

export const HomeHero: React.FC<
  HomeHeroProps & {
    id?: string
  }
> = (props) => {
  const { bgImage, form } = props

  return (
    <>
      <section
        className="min-h-80 py-[140px]"
        style={{
          background: '45.31% 26.32% / cover no-repeat, rgb(89, 150, 115)',
          backgroundImage: `url(${getMediaSrc(bgImage)})`,
        }}
      >
        <Container>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-start-2 max-w-md ml-auto">
              <Card className="p-14 px-10">
                <CardContent className="text-center p-0">
                  <Headline level={3} className="mb-3">
                    Yosemite Vacation Cabin Rental
                  </Headline>

                  <p className="md:max-w-11/12 mx-auto mb-5 text-foreground/60">
                    Plan your next vacation and enjoy the nature around you!
                  </p>

                  <FormBlock enableIntro={true} form={form as FormType} />

                  {/* <OrderCallForm /> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
