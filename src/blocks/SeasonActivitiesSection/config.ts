import type { Block } from 'payload'

export const SeasonActivitiesSection: Block = {
  slug: 'seasonActivitiesSection',
  interfaceName: 'SeasonActivitiesSection',
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
      name: 'seasonActivities',
      type: 'relationship',
      hasMany: true,
      relationTo: 'seasonActivities',
      label: 'Season Activities',
    },
  ],
}
