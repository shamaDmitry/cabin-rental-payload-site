import type { Block } from 'payload'

export const HomeHero: Block = {
  slug: 'homeHero',
  interfaceName: 'HomeHero',
  fields: [
    {
      name: 'bgImage',
      type: 'upload',
      admin: {
        // condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
    {
      name: 'form',
      type: 'relationship',
      required: true,
      admin: {},
      hasMany: false,
      relationTo: 'forms',
    },
    // {
    //   name: 'type',
    //   type: 'select',
    //   defaultValue: 'lowImpact',
    //   label: 'Type',
    //   options: [
    //     {
    //       label: 'None',
    //       value: 'none',
    //     },
    //     {
    //       label: 'High Impact',
    //       value: 'highImpact',
    //     },
    //     {
    //       label: 'Medium Impact',
    //       value: 'mediumImpact',
    //     },
    //     {
    //       label: 'Low Impact',
    //       value: 'lowImpact',
    //     },
    //   ],
    //   required: true,
    // },
    // {
    //   name: 'richText',
    //   type: 'richText',
    //   editor: lexicalEditor({
    //     features: ({ rootFeatures }) => {
    //       return [
    //         ...rootFeatures,
    //         HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
    //         FixedToolbarFeature(),
    //         InlineToolbarFeature(),
    //       ]
    //     },
    //   }),
    //   label: false,
    // },
    // linkGroup({
    //   overrides: {
    //     maxRows: 2,
    //   },
    // }),
  ],
}
