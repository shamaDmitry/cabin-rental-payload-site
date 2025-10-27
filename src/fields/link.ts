import type { Field, GroupField } from 'payload'

import deepMerge from '@/utilities/deepMerge'

export type LinkAppearances = 'default' | 'outline'

export const appearanceOptions: Record<LinkAppearances, { label: string; value: string }> = {
  default: {
    label: 'Default',
    value: 'default',
  },
  outline: {
    label: 'Outline',
    value: 'outline',
  },
}

type LinkType = (options?: {
  appearances?: LinkAppearances[] | false
  disableLabel?: boolean
  overrides?: Partial<GroupField>
}) => Field

export const link: LinkType = ({ appearances, disableLabel = false, overrides = {} } = {}) => {
  const linkResult: GroupField = {
    name: 'link',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            admin: {
              layout: 'horizontal',
              width: '50%',
            },
            defaultValue: 'reference',
            options: [
              {
                label: 'Internal link (reference)',
                value: 'reference',
              },
              {
                label: 'Custom URL (custom)',
                value: 'custom',
              },
            ],
          },
          {
            name: 'newTab',
            type: 'checkbox',
            admin: {
              style: {
                alignSelf: 'flex-end',
              },
              width: '50%',
            },
            label: 'Open in new tab',
          },
        ],
      },
    ],
  }

  const linkTypes: Field[] = [
    {
      name: 'reference',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'reference',
      },
      label: 'Document to link to',
      relationTo: ['pages', 'posts'],
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'custom',
      },
      label: 'Custom URL',
      required: true,
    },
  ]

  if (!disableLabel) {
    linkTypes.map((linkType) => ({
      ...linkType,
      admin: {
        ...linkType.admin,
        width: '50%',
      },
    }))

    linkResult.fields.push({
      type: 'row',
      fields: [
        ...linkTypes,
        {
          name: 'label',
          type: 'text',
          admin: {
            width: '50%',
          },
          label: 'Label',
          required: true,
        },
      ],
    })
  } else {
    linkResult.fields = [...linkResult.fields, ...linkTypes]
  }

  if (appearances !== false) {
    let appearanceOptionsToUse = [appearanceOptions.default, appearanceOptions.outline]

    if (appearances) {
      appearanceOptionsToUse = appearances.map((appearance) => appearanceOptions[appearance])
    }

    linkResult.fields.push({
      name: 'appearance',
      type: 'select',
      admin: {
        description: 'Choose how the link should be rendered.',
      },
      defaultValue: 'default',
      options: appearanceOptionsToUse,
    })
  }

  // Optional icon selection (Lucide icon name)
  linkResult.fields.push({
    type: 'row',
    fields: [
      {
        name: 'icon',
        type: 'select',
        admin: {
          description:
            'Optional: choose a Lucide icon (the name of the icon exported from `lucide-react`). Leave empty for no icon.',
          width: '50%',
        },
        label: 'Icon',
        options: [
          { label: '— None —', value: '' },
          { label: 'External Link', value: 'ExternalLink' },
          { label: 'Arrow Right', value: 'ArrowRight' },
          { label: 'Arrow Up Right', value: 'ArrowUpRight' },
          { label: 'Menu', value: 'Menu' },
          { label: 'Search', value: 'Search' },
          { label: 'Check', value: 'Check' },
          { label: 'Chevron Right', value: 'ChevronRight' },
          { label: 'Chevron Left', value: 'ChevronLeft' },
          { label: 'Facebook', value: 'Facebook' },
          { label: 'Instagram', value: 'Instagram' },
          { label: 'Linkedin', value: 'Linkedin' },
          { label: 'Twitter', value: 'Twitter' },
          { label: 'Map Pin', value: 'MapPin' },
          { label: 'Phone', value: 'Phone' },
          { label: 'Mail', value: 'Mail' },
          { label: 'Calendar', value: 'Calendar' },
          { label: 'User', value: 'User' },
          { label: 'Star', value: 'Star' },
          { label: 'Heart', value: 'Heart' },
        ],
        defaultValue: '',
      },
      {
        name: 'iconPosition',
        type: 'radio',
        admin: {
          width: '50%',
          condition: (_, siblingData) => {
            return siblingData?.icon && siblingData?.icon !== 'none'
          },
        },
        label: 'Icon position',
        options: [
          { label: 'After label', value: 'after' },
          { label: 'Before label', value: 'before' },
        ],
        defaultValue: 'after',
      },
      {
        name: 'iconSize',
        type: 'select',
        admin: {
          width: '50%',
          condition: (_, siblingData) => {
            return siblingData?.icon && siblingData?.icon !== 'none'
          },
        },
        label: 'Icon size',
        options: [...['16', '20', '24'].map((size) => ({ label: size, value: size }))],
        defaultValue: '16',
      },
    ],
  })
  return deepMerge(linkResult, overrides)
}
