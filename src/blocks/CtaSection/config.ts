import type { Block } from 'payload'

import { linkGroup } from '@/fields/linkGroup'

export const CtaSection: Block = {
  slug: 'ctaSection',
  interfaceName: 'CtaSection',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'bgImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
  ],
  labels: {
    plural: 'Cta Section',
    singular: 'Cta Section',
  },
}
