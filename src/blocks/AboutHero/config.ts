import {
  AlignFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  OrderedListFeature,
  
} from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const AboutHero: Block = {
  slug: 'aboutHero',
  interfaceName: 'AboutHero',
  fields: [
    {
      name: 'bgImage',
      type: 'upload',
      admin: {},
      relationTo: 'media',
      required: true,
    },
    {
      name: 'mainImage',
      type: 'upload',
      admin: {},
      relationTo: 'media',
      required: true,
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Headline',
    },
    {
      name: 'subHeadline',
      type: 'text',
      required: true,
      label: 'Subheadline',
    },
    {
      name: 'body',
      type: 'richText',
      label: 'Body',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            // HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            OrderedListFeature(),
            AlignFeature(),
          ]
        },
      }),
    },
  ],
}
