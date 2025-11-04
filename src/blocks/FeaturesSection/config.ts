import type { Block } from 'payload'

export const FeaturesSection: Block = {
  slug: 'featuresSection',
  interfaceName: 'FeaturesSection',
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      label: 'Description',
    },
    {
      name: 'cards',
      type: 'relationship',
      relationTo: 'aboutCard',
      required: true,
      minRows: 3,
      hasMany: true,
      label: 'Cards',
    },
  ],
}
