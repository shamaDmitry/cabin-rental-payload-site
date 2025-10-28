'use client'

import { LightBoxGallery } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<LightBoxGallery['content']>[number]>()

  const item = data?.data
  const rowNumber = data.rowNumber === undefined ? 0 : data.rowNumber

  const label = item.title ? `Gallery item ${rowNumber + 1}: ${item.title}` : 'Gallery item'

  return <div>{label}</div>
}
