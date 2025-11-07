import Container from '@/components/core/Container'
import Headline from '@/components/core/Headline'
import CategoriesTab from '@/components/gallery/CategoriesTab'
import GuestSlider from '@/components/gallery/GuestSlider'
import Lightbox from '@/components/gallery/Lightbox'
import { Suspense } from 'react'
import { v4 as uuidv4 } from 'uuid'

const galleryCategories = [
  { id: uuidv4(), href: '?category=summer', label: 'Summer' },
  { id: uuidv4(), href: '?category=winter', label: 'Winter' },
  { id: uuidv4(), href: '?category=spring', label: 'Spring' },
  { id: uuidv4(), href: '?category=autumn', label: 'Autumn' },
  { id: uuidv4(), href: '?category=fishing', label: 'Fishing' },
  { id: uuidv4(), href: '?category=spa', label: 'SPA' },
]

const GalleryPage = () => {
  return (
    <>
      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d01152af7f5810024cd30c3?nowebp")`,
        }}
      >
        <Container>
          <Headline className="mb-14 text-center">Gallery</Headline>

          <Suspense fallback={<div>Loading...</div>}>
            <CategoriesTab
              activeCategoryId={galleryCategories[0].id}
              galleryCategories={galleryCategories}
            />
          </Suspense>

          <Lightbox />
        </Container>
      </section>

      <section
        className="min-h-[320px] py-20 text-background"
        style={{
          background: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d010336d6148d00231fdb7a?nowebp")`,
        }}
      >
        <Container>
          <Headline className="mb-14 text-center ">Our guests</Headline>

          {/* <GuestSlider /> */}
        </Container>
      </section>
    </>
  )
}

export default GalleryPage
