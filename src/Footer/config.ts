import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'group',

      fields: [
        {
          name: 'navItems',
          type: 'array',
          fields: [
            link({
              appearances: false,
            }),
          ],
          maxRows: 6,
          admin: {
            initCollapsed: true,
            width: '50%',
            components: {
              RowLabel: '@/Footer/RowLabel#RowLabel',
            },
          },
        },
        {
          name: 'socialLinks',
          type: 'array',
          fields: [link()],
          admin: {
            width: '50%',
            components: {
              RowLabel: '@/Footer/RowLabel#RowLabel',
            },
          },
        },
      ],
    },

    {
      name: 'theme-selector',
      type: 'checkbox',
      label: 'Theme Selector',
      admin: {},
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
