import { link } from '@/fields/link'
import type { Block } from 'payload'

export const TestimonialSection: Block = {
  slug: 'testimonialSection',
  interfaceName: 'TestimonialSection',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Headline',
    },
    {
      name: 'bgImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background image',
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'colSpan',
          type: 'number',
          label: 'Column span',
          required: true,
        },
        {
          name: 'rowSpan',
          type: 'number',
          label: 'Row span',
          required: true,
        },
      ],
    },
    link(),
  ],
}
