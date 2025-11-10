'use client'

import type {
  LightBoxGallerySection as LightBoxGallerySectionProps,
  MediaCategory,
} from '@/payload-types'

import React, { Suspense } from 'react'
import Headline from '@/components/core/Headline'
import 'yet-another-react-lightbox/styles.css'
import Container from '@/components/core/Container'
import CategoriesTab from '@/components/gallery/CategoriesTab'
import GalleryLightbox from '@/components/gallery/GalleryLightbox'
import { getMediaSrc } from '@/utilities/getMediaSrc'

export const LightBoxGallerySection: React.FC<
  LightBoxGallerySectionProps & {
    id?: string
  }
> = (props) => {
  const { headline, galleryCategories, backgroundImage, content } = props
  const categories = galleryCategories as MediaCategory[]

  console.log('content', content)

  return (
    <>
      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url("${getMediaSrc(backgroundImage)}")`,
        }}
      >
        <Container>
          <Headline className="mb-14 text-center">{headline}</Headline>

          {categories && (
            <Suspense fallback={<div>Loading...</div>}>
              <CategoriesTab
                slugPrefix="?category="
                activeCategoryId={categories[0].id}
                galleryCategories={categories}
              />
            </Suspense> 
          )}

          <GalleryLightbox
            slides={(content ?? []) as Parameters<typeof GalleryLightbox>[0]['slides']}
          />
        </Container>
      </section>
    </>
  )
}
