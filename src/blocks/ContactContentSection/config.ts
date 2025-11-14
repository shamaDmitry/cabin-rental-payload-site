import type { Block } from 'payload'
import { ContactItem } from '@/blocks/ContactItem/config'
import { ContactGallery } from '@/blocks/ContactGallery/config'

export const ContactContentSection: Block = {
  slug: 'contactContentSection',
  interfaceName: 'ContactContentSection',
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
      name: 'listItems',
      required: true,
      type: 'blocks',
      blocks: [ContactItem],
    },
    {
      name: 'gallery',
      type: 'blocks',
      blocks: [ContactGallery],
    },
  ],
}
