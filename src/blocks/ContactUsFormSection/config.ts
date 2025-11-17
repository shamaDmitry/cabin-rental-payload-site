import type { Block } from 'payload'

export const ContactUsFormSection: Block = {
  slug: 'contactUsFormSection',
  interfaceName: 'ContactUsFormSection',
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Headline',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'address',
      required: true,
      minRows: 1,
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'content', type: 'richText', required: true },
      ],
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
  ],
}
