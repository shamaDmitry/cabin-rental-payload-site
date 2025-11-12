'use client'

import type {
  LightBoxGallerySection as LightBoxGallerySectionProps,
  Media,
  MediaCategory,
} from '@/payload-types'

import React, { Suspense, useEffect, useState } from 'react'
import Headline from '@/components/core/Headline'
import 'yet-another-react-lightbox/styles.css'
import Container from '@/components/core/Container'
import CategoriesTab from '@/components/gallery/CategoriesTab'
import GalleryLightbox from '@/components/gallery/GalleryLightbox'
import { getMediaSrc } from '@/utilities/getMediaSrc'
import { Where } from 'payload'
import { stringify } from 'qs-esm'
import { useSearchParams } from 'next/navigation'

export const LightBoxGallerySection: React.FC<LightBoxGallerySectionProps> = (props) => {
  const { headline, galleryCategories, backgroundImage } = props
  const categories = galleryCategories as MediaCategory[]

  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const [data, setData] = useState<Media[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const query: Where = {
      'category.slug': {
        equals: category || categories[0].slug,
      },
    }

    const stringifiedQuery = stringify(
      {
        where: query,
      },
      { addQueryPrefix: true },
    )

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/galleryMedias${stringifiedQuery}`)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()

        setData(result.docs)
      } catch (error) {
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [category, categories])

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

          {error && <p className="text-center">{error.message}</p>}

          {isLoading && <p className="text-center">Loading...</p>}

          {data.length === 0 && <p className="text-center">Nothing is here</p>}

          {data.length > 0 && <GalleryLightbox slides={data} />}
        </Container>
      </section>
    </>
  )
}
