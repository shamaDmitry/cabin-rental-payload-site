import type { Block } from 'payload'

export const CafeSection: Block = {
  slug: 'cafeSection',
  interfaceName: 'CafeSection',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Headline',
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      label: 'Description',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
    {
      name: 'cards',
      type: 'relationship',
      required: true,
      admin: {},
      hasMany: true,
      relationTo: 'cafeCard',
      minRows: 2,
    },
  ],
}
