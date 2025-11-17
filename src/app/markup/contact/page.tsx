import AboutForm from '@/components/about/AboutForm'
import AddressRow from '@/components/AddressRow'
// import ContactGallery from '@/components/contact/ContactGallery'
import ContactItem from '@/components/contact/ContactItem'
import MapSection from '@/components/contact/MapSection'
import Container from '@/components/core/Container'
import Headline from '@/components/core/Headline'
import { CarIcon, TrainIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const data = [
  {
    id: uuidv4(),
    title: 'By car',
    description:
      'Stick to the US Route 120 or 140, or to the US 41 if you travel from the South. When in Yosemite Park, turn left and drive about 15 minutes, then turn right on the crossroad, and you’ll see the Yosemite Village sign in 10 minutes.',
    icon: <CarIcon className="size-10" />,
  },
  {
    id: uuidv4(),
    title: 'By train',
    description:
      'Buy a San Joaquins train ticket if you travel from San Francisco or Sacramento, and then change to the YARTS bus to get to the very Yosemite village, turn right from the bus stop and walk around 5 minutes.',
    icon: <TrainIcon className="size-10" />,
  },
]

const images = [
  {
    id: uuidv4(),
    src: 'https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00db5110e8340023f6bdcd_optimized_1316_c1316x987-0x0.webp',
    alt: '',
    width: 570,
    height: 520,
  },
  {
    id: uuidv4(),
    src: 'https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00dc358c40bc0023b19ed3_optimized_1396_c1396x930-0x0.webp',
    alt: '',
    width: 570,
    height: 265,
  },
  {
    id: uuidv4(),
    src: 'https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00b63c032b4e0023acecff_optimized_2308_c1862x697-0x82.webp',
    alt: '',
    width: 570,
    height: 265,
  },
]

const ContactPage = () => {
  return (
    <>
      <section
        className="py-20 bg-center bg-cover"
        style={{
          backgroundImage: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00fa13525dfe002370a550?nowebp")`,
        }}
      >
        <Container className="text-center max-w-[770px]">
          <Headline className="mb-8">How to Get There</Headline>

          <p className="">
            Yosemite village is a four-hour drive from San Francisco and Sacramento, five hours from
            Reno and six hours from Los Angeles. The nearest local airports are Fresno, Merced and
            Modesto.
          </p>

          <div className="mt-11 space-y-8">
            {data.map((item) => {
              return <ContactItem key={item.id} data={item} />
            })}
          </div>
        </Container>

        <Container className="mt-12">{/* <ContactGallery images={images} /> */}</Container>
      </section>

      <MapSection />

      <section className="py-20 relative">
        <div
          className="absolute size-full bg-cover left-0 top-0 -z-10 bg-fixed filter contrast-[160%] bg-center"
          style={{
            backgroundImage: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5cfe6b435da05700239a0c2b?nowebp")`,
          }}
        />
        <div className="bg-[#272121b3] absolute left-0 top-0 bottom-0 right-0 -z-10" />

        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-background">
              <Headline className="mb-8">Contact Us</Headline>

              <p className="text-lg">
                If you have any questions, feel free to get in touch with us at any time.
              </p>

              <div className="table w-full mt-11">
                {/* <AddressRow
                  label="Write Us"
                  content={<Link href="mailto:yosemite@email.com">yosemite@email.com</Link>}
                />
                <AddressRow
                  label="Call Us"
                  content={
                    <div className="flex flex-col">
                      <Link href="tel:+1123456789">+1 (123) 45 67 89</Link>
                      <Link href="tel:+1123456700">+1 (123) 45 67 00</Link>
                    </div>
                  }
                />
                <AddressRow
                  label="Visit Us"
                  content={
                    <span>
                      Yosemite Mariposa County, <br /> Ca, USA
                    </span>
                  }
                /> */}
              </div>
            </div>

            <div className="bg-background rounded-lg py-10 px-8">
              <AboutForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ContactPage
