import { link } from '@/fields/link'
import type { Block } from 'payload'

export const ActivitiesSection: Block = {
  slug: 'activitiesSection',
  interfaceName: 'ActivitiesSection',
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
      name: 'activities',
      type: 'relationship',
      required: true,
      admin: {},
      hasMany: true,
      relationTo: 'activities',
      minRows: 3,
    },
  ],
}
