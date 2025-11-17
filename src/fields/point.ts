import type { PointField, Field } from 'payload'

import deepMerge from '@/utilities/deepMerge'

type PointType = (options?: { overrides?: Partial<PointField> }) => Field

export const point: PointType = ({ overrides = {} } = {}) => {
  const generatedPoint: Field = {
    name: 'coordinates',
    type: 'point',
    required: true,
  }

  return deepMerge(generatedPoint, overrides)
}
