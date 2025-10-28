import type { CollectionConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { slugField } from 'payload'

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
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'details',
      type: 'relationship',
      admin: {},
      hasMany: true,
      relationTo: 'cabinsDetail',
    },
    slugField({
      position: undefined,
    }),
  ],
}
