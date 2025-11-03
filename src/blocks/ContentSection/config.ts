import type { Block } from 'payload'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Banner } from '@/blocks/Banner/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'

export const ContentSection: Block = {
  slug: 'contentSection',
  interfaceName: 'ContentSection',
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {},
      label: 'Content',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            // example block/inline blocks
            BlocksFeature({ blocks: [Banner, MediaBlock], inlineBlocks: [Banner] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
    },
  ],
}
