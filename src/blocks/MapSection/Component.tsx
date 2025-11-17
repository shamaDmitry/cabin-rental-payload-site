'use client'

import type { MapSection as MapSectionProps } from '@/payload-types'

import { FC } from 'react'

import dynamic from 'next/dynamic'

const DynamicMapComponent = dynamic(() => import('@/components/contact/ContactMap'), {
  ssr: false,
})

export const MapSection: FC<MapSectionProps> = (props) => {
  const { coordinates } = props

  return (
    <>
      <section className="relative h-[500px]">
        <DynamicMapComponent posix={coordinates} />
      </section>
    </>
  )
}
