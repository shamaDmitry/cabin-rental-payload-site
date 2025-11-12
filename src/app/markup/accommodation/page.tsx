import CabinCard from '@/components/acommodation/CabinCard'
import Container from '@/components/core/Container'
import Headline from '@/components/core/Headline'
import ReservationForm from '@/components/homepage/ReservationForm'
import { Card, CardContent } from '@/components/ui/card'
import { v4 as uuidv4 } from 'uuid'

const cabins = [
  {
    id: uuidv4(),
    name: 'River Chalet',
    price: 65,
    imageUrl:
      'https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00d6a9cadfda00238db3f2_optimized_1400_c1400x927-0x0.webp',
    details: ['1 Bedroom', '1 Bathroom', 'Sleeps 2'],
    amenities: [
      { id: uuidv4(), title: 'Jetted Tub' },
      { id: uuidv4(), title: 'Flat Panel TV' },
      { id: uuidv4(), title: 'Fireplace' },
      { id: uuidv4(), title: 'Wi-Fi' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Lookout Lodge',
    price: 75,
    imageUrl:
      'https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00d6e1358ad60023a3dec1_optimized_1396_c1396x930-0x0.webp',
    details: ['2 Bedrooms', '1 Bathroom', 'Sleeps 4'],
    amenities: [
      { id: uuidv4(), title: 'Hot Tub' },
      { id: uuidv4(), title: 'Pool Table' },
      { id: uuidv4(), title: 'Jacuzzi Tub' },
      { id: uuidv4(), title: 'Wi-Fi' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Smoky View Chalet',
    price: 85,
    imageUrl:
      'https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00d72a0e8de1002387e025_optimized_1385_c1385x937-0x0.webp',
    details: ['2 Bedrooms ', '2 Bathrooms', 'Sleeps 6'],
    amenities: [
      { id: uuidv4(), title: 'Whirlpool Tub' },
      { id: uuidv4(), title: 'Air Hockey' },
      { id: uuidv4(), title: 'Fireplace' },
      { id: uuidv4(), title: 'Wi-Fi' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Mountain Haven',
    price: 100,
    imageUrl:
      'https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00d765032b4e0023ad1263_optimized_1396_c1396x929-0x0.webp',
    details: ['3 Bedrooms', '2 Bathrooms', 'Sleeps 8'],
    amenities: [
      { id: uuidv4(), title: 'Whirlpool Tub' },
      { id: uuidv4(), title: 'Fireplace' },
      { id: uuidv4(), title: 'Grill' },
      { id: uuidv4(), title: 'Wi-Fi' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Mountain Splash',
    price: 150,
    imageUrl:
      'https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00d80ff7675700234c3219_optimized_1396_c1396x930-0x0.webp',
    details: ['3 Bedrooms', '3 Bathrooms', 'Sleeps 10'],
    amenities: [
      { id: uuidv4(), title: 'Private Indoor Pool' },
      { id: uuidv4(), title: 'Pool Table' },
      { id: uuidv4(), title: 'Hot Tub' },
      { id: uuidv4(), title: 'Air Hockey' },
    ],
  },
]

const AccommodationsPage = () => {
  return (
    <>
      <section className="py-20">
        <Headline className="text-center mb-12">Cabin Rentals</Headline>

        <div className="flex flex-col gap-0">
          {cabins.map((cabin, index) => {
            return (
              <div
                key={cabin.id}
                className="py-20 bg-center bg-cover"
                style={{
                  backgroundImage:
                    index % 2 === 0
                      ? `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00faf8525dfe002370a5bb?nowebp")`
                      : undefined,
                }}
              >
                <Container>{/* <CabinCard data={cabin} /> */}</Container>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-[100px] relative">
        <div
          className="absolute size-full left-0 top-0 -z-10 bg-no-repeat bg-[43%_13%] bg-cover"
          style={{
            backgroundImage: `url(https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5cfe6b435da05700239a0c2b?nowebp)`,
          }}
        />

        <Container>
          <Card className="bg-white/70 backdrop-blur-lg border border-white/20 shadow-xl text-center max-w-xl mx-auto p-0">
            <CardContent className="py-12 px-16">
              <Headline level={2} className="font-bold mb-8">
                Choose the best one
              </Headline>

              <p className="text-lg mb-12 text-foreground/60">
                Complete the form below to make a reservation
              </p>

              <ReservationForm />
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  )
}

export default AccommodationsPage
