import type { CollectionConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

export const Cabins: CollectionConfig = {
  slug: 'cabins',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'bgImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'details',
          type: 'relationship',
          required: true,
          admin: {},
          hasMany: true,
          relationTo: 'cabinsDetail',
        },
        {
          name: 'amenities',
          type: 'relationship',
          required: true,
          admin: {},
          hasMany: true,
          relationTo: 'cabinsAmenity',
        },
      ],
    },
  ],
}
