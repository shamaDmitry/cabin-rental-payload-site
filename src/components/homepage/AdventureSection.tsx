import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import LightBoxCard from '@/components/LightBoxCard'
import { FC } from 'react'
import { cn } from '@/lib/utils'
// import config from '@payload-config'
// import { getPayload } from 'payload'

interface AdventureSectionProps {
  className?: string
}

const AdventureSection: FC<AdventureSectionProps> = async ({ className }) => {
  // const payload = await getPayload({ config })
  // const adventureCards = await payload.find({ collection: 'adventure-cards' })

  return (
    <section
      className={cn('text-center py-20', className)}
      style={{
        background:
          "url('https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00dd1ebd7a91002452e0b6?nowebp') 10.31% 73.54% / cover no-repeat, rgb(243, 243, 242)",
      }}
    >
      <Container className="">
        <Headline as="h2" className="mb-5">
          Your Adventure Starts Here
        </Headline>

        <p className="max-5xl mx-auto mb-8 text-lg text-foreground/60">
          Welcome to a perfect escape in Yosemite Mariposa County, California! Yosemite National
          Park is known for its giant sequoias and the observation deck of the Portal View, which
          overlooks the Briddlevale Falls, the El Capitan granite rocks and the Half House. The
          Yosemite village proudly offers a lot of shops, restaurants, hotels, and a museum, along
          with the Ansel Adams Gallery. Plan your adventure and find your place in Yosemite!
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {/* {adventureCards.docs.map((card, index) => {
            return <LightBoxCard key={index} headline={card.title} image={card.image} />
          })} */}
        </div>
      </Container>
    </section>
  )
}

export default AdventureSection
