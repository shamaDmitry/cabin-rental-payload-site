import type { Block } from 'payload'

export const CabinSection: Block = {
  slug: 'cabin-section',
  interfaceName: 'CabinSection',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
    {
      name: 'cabin',
      type: 'relationship',
      relationTo: 'cabins',
      required: true,
      label: 'Cabin',
    },
  ],
}
