import type { Block } from 'payload'

export const LightBoxGallerySection: Block = {
  slug: 'lightBoxGallerySection',
  interfaceName: 'LightBoxGallerySection',
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
      name: 'galleryCategories',
      relationTo: 'mediaCategories',
      type: 'relationship',
      hasMany: true,
      label: 'Gallery Categories',
      minRows: 3,
      required: true,
    },
    {
      name: 'content',
      type: 'relationship',
      relationTo: 'galleryMedias',
      hasMany: true,
      minRows: 3,
      maxRows: 6,
    },
  ],
}
