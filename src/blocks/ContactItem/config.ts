import { icon } from '@/fields/icon'
import type { Block } from 'payload'
import {
  BlocksFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Banner } from '@/blocks/Banner/config'

export const ContactItem: Block = {
  slug: 'contactItem',
  interfaceName: 'ContactItem',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Rich Text',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            BlocksFeature({ blocks: [Banner] }),
          ]
        },
      }),
    },
    icon(),
  ],
}
