import Headline from '@/components/core/Headline'
import List from '@/components/List'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Cabin, CabinsAmenity, CabinsDetail } from '@/payload-types'
import { getMediaSrc } from '@/utilities/getMediaSrc'

const CabinCard = ({ data }: { data: Cabin }) => {
  const { amenities, details, price, image, title } = data

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="rounded-lg overflow-hidden">
        <Image
          className="size-full object-cover"
          src={getMediaSrc(image)}
          alt={title}
          width={670}
          height={435}
        />
      </div>

      <div>
        <div className="text-3xl mb-4 font-medium">
          <span className="text-secondary">${price}</span>/a night
        </div>

        <Headline level={4} className="mb-1.5">
          {title}
        </Headline>

        <List data={amenities as CabinsAmenity[]} className="mb-5" />

        <div className="space-y-1 mb-10">
          {(details as CabinsDetail[]).map((detail, index) => {
            return <div key={index}>{detail.title}</div>
          })}
        </div>

        <Button asChild className="rounded-full" size={'xl'}>
          <Link href="#">Reserve cabin</Link>
        </Button>
      </div>
    </div>
  )
}

export default CabinCard
