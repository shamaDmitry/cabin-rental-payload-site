import { icon } from '@/fields/icon'
import type { Block } from 'payload'

export const ContactItem: Block = {
  slug: 'contactItem',
  interfaceName: 'ContactItem',
  fields: [
    icon(),
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'body',
      type: 'textarea',
      label: 'Body',
      required: true,
    },
  ],
}
