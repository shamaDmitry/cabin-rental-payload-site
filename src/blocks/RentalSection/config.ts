import { link } from '@/fields/link'
import { linkGroup } from '@/fields/linkGroup'
import type { Block } from 'payload'

export const RentalSection: Block = {
  slug: 'rentalSection',
  interfaceName: 'RentalSection',
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
      name: 'cabins',
      type: 'relationship',
      required: true,
      admin: {},
      hasMany: true,
      relationTo: 'cabins',
      minRows: 2,
      maxRows: 4,
    },
    link({
      overrides: {
        name: 'action',
      },
      // appearances: ['default', 'outline'],
      // overrides: {
      //   maxRows: 1,
      // },
    }),

    // {
    //   name: 'content',
    //   type: 'array',
    //   fields: [
    //     {
    //       name: 'title',
    //       type: 'text',
    //       required: true,
    //       label: 'Title',
    //     },
    //     {
    //       name: 'price',
    //       type: 'number',
    //       required: true,
    //       label: 'Price',
    //     },
    //     {
    //       name: 'description',
    //       type: 'text',
    //       required: true,
    //       label: 'Description',
    //     },
    //     {
    //       name: 'bgImage',
    //       type: 'upload',
    //       relationTo: 'media',
    //       required: true,
    //       label: 'Background Image',
    //     },
    //     {
    //       name: 'href',
    //       type: 'text',
    //       required: true,
    //       label: 'Link',
    //     },
    //   ],
    //   maxRows: 6,
    //   admin: {
    //     initCollapsed: true,
    //     // components: {
    //     //   RowLabel: '@/blocks/RentalSection/RowLabel#RowLabel',
    //     // },
    //   },
    // },
  ],
}
