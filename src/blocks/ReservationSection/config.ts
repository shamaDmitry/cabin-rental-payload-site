import type { Block } from 'payload'

export const ReservationSection: Block = {
  slug: 'reservationSection',
  interfaceName: 'ReservationSection',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Headline',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
