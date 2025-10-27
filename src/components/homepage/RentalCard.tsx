import { Card, CardContent } from '@/components/ui/card'
import Headline from '../core/Headline'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Media } from '@/payload-types'

interface RentalCardProps {
  title: string
  price: number
  description: string
  bgImage: Media | string
  href: string
}

const RentalCard: React.FC<RentalCardProps> = ({ title, price, description, bgImage, href }) => {
  const bgImageUrl = typeof bgImage === 'string' ? bgImage : bgImage.url

  return (
    <Card className="overflow-hidden rounded-md relative border-0 shadow py-[70px] px-9">
      <div className="absolute size-full left-0 top-0">
        <div
          className="absolute left-0 right-0 top-0 bottom-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("${bgImageUrl}")`,
          }}
        ></div>

        <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/50"></div>
      </div>

      <CardContent className="flex flex-col items-center relative text-card p-0">
        <div className="text-4xl mb-4 font-bold">${price}/night</div>

        <Headline as="h3" className="mb-4">
          {title}
        </Headline>

        <p>{description}</p>

        <Button
          asChild
          size="xl"
          className="rounded-full hover:bg-card hover:text-foreground mt-12"
        >
          <Link href={href}>Learn more</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default RentalCard
