import type { Block } from 'payload'

export const ContactGallery: Block = {
  slug: 'contactGallery',
  interfaceName: 'ContactGallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      label: 'Gallery Images',
      admin: {
        description: 'Upload up to 3 images for the gallery',
      },
      required: true,
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
