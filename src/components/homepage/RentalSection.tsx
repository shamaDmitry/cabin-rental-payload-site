import { FC } from 'react'
import Headline from '@/components/core/Headline'
import RentalCard from '@/components/homepage/RentalCard'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Container from '@/components/core/Container'
import { cn } from '@/lib/utils'
// import config from '@payload-config'
// import { getPayload } from 'payload'

interface RentalSection {
  className?: string
}

const RentalSection: FC<RentalSection> = async ({ className }) => {
  // const payload = await getPayload({ config })
  // const cabins = await payload.find({ collection: 'cabin' })

  return (
    <section
      className={cn('min-h-80 py-[140px]', className)}
      style={{
        background: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00cfdbe885cb00231936b3?nowebp")`,
      }}
    >
      <Container className="text-center text-card">
        <Headline className="mb-12">Cabin Rentals</Headline>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-12">
          {/* {cabins.docs.map((cabin) => {
            return (
              <RentalCard
                key={cabin.id}
                title={cabin.title}
                price={cabin.price}
                description={cabin.details.map((item) => item.detail).join(', ')}
                bgImage={cabin.bgImage || ''}
                href="/accommodation"
              />
            )
          })} */}
        </div>

        <Link href={'/accommodation'}>
          <Button
            // size={'xl'}
            variant="outline"
            className="rounded-full text-background border-background hover:bg-background hover:text-foreground"
          >
            See all cabins
          </Button>
        </Link>
      </Container>
    </section>
  )
}

export default RentalSection
