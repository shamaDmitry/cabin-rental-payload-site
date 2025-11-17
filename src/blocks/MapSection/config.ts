import { point } from '@/fields/point'
import type { Block } from 'payload'

export const MapSection: Block = {
  slug: 'mapSection',
  interfaceName: 'MapSection',
  fields: [point()],
}
