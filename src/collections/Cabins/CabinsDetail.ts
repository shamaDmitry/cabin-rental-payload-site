import type { CollectionConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

export const CabinsDetail: CollectionConfig = {
  slug: 'cabinsDetail',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  // admin: {
  //   useAsTitle: 'title',
  // },
  fields: [
    {
      name: 'detail',
      type: 'text',
      required: true,
    },
  ],
}
