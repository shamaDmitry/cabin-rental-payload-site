import type { Block } from 'payload'

export const SliderSection: Block = {
  slug: 'sliderSection',
  interfaceName: 'SliderSection',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'slides',
      type: 'array',
      fields: [
        { name: 'src', type: 'upload', relationTo: 'media' },
        { name: 'alt', type: 'text' },
      ],
      required: true,
    },
  ],
  labels: {
    plural: 'Slider Sections',
    singular: 'Slider Section',
  },
}
