import type { CollectionConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

export const SeasonActivities: CollectionConfig = {
  slug: 'seasonActivities',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'headline',
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
    },
    {
      name: 'mediaPosition',
      type: 'select',
      required: true,
      defaultValue: 'start',
      options: [
        { label: 'Start', value: 'start' },
        { label: 'End', value: 'end' },
      ],
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
    },
    {
      name: 'image',
      type: 'upload',
      required: true,
      relationTo: 'media',
      label: 'Image',
    },
    {
      name: 'list',
      required: true,
      type: 'relationship',
      hasMany: true,
      relationTo: 'seasonActivityItem',
      label: 'Activity list',
    },
  ],
}
