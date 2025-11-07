import type { Block } from 'payload'

export const CtaFormSection: Block = {
  slug: 'ctaFormSection',
  interfaceName: 'CtaFormSection',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
  ],
  labels: {
    plural: 'Cta Form Sections',
    singular: 'Cta Form Section',
  },
}
