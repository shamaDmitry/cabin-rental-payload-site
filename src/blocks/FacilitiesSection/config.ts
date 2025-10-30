import type { Block } from 'payload'

export const FacilitiesSection: Block = {
  slug: 'facilitiesSection',
  interfaceName: 'FacilitiesSection',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Headline',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
  ],
}
