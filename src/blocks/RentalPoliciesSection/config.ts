import {
  BlocksFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  LinkFeature,
} from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'
import { ContactItem } from '@/blocks/ContactItem/config'
import { Content } from '@/blocks/Content/config'

export const RentalPoliciesSection: Block = {
  slug: 'rentalPoliciesSection',
  interfaceName: 'RentalPoliciesSection',
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
      name: 'contacts',
      type: 'array',
      admin: {},
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'phone', type: 'text', required: true },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            // LinkFeature({
            //   fields: ({ defaultFields }) => [
            //     ...defaultFields,
            //     {
            //       name: 'rel',
            //       label: 'Rel Attribute',
            //       type: 'select',
            //       hasMany: true,
            //       options: ['noopener', 'noreferrer', 'nofollow'],
            //       admin: {
            //         description:
            //           'The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.',
            //       },
            //     },
            //     { name: 'class', type: 'select', options: ['primary', 'secondary'] },
            //   ],
            // }),
            BlocksFeature({ blocks: [Content, ContactItem] }),
          ]
        },
      }),
      label: false,
    },
  ],
}
