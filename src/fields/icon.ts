import deepMerge from '@/utilities/deepMerge'
import type { Field, GroupField, RowField } from 'payload'
import * as LucideIcons from 'lucide-react'

type IconType = (options?: { overrides?: Partial<GroupField> }) => Field

export const icon: IconType = ({ overrides = {} } = {}) => {
  const defaultFields: GroupField = {
    type: 'group',
    fields: [
      {
        name: 'icon',
        type: 'select',
        required: true,
        admin: {
          description:
            'Optional: choose a Lucide icon (the name of the icon exported from `lucide-react`). Leave empty for no icon.',
          width: '50%',
        },
        label: 'Icon',
        options: [
          { label: '— None —', value: '' },
          ...Object.entries(LucideIcons).map(([iconName]) => ({
            label: iconName,
            value: iconName,
          })),
        ],
        defaultValue: '',
      },
      {
        name: 'iconSize',
        required: true,
        type: 'select',
        admin: {
          width: '50%',
          condition: (_, siblingData) => {
            return siblingData?.icon && siblingData?.icon !== 'none'
          },
        },
        label: 'Icon size',
        options: [
          ...['16', '20', '24', '28', '32', '36', '40'].map((size) => ({
            label: size,
            value: size,
          })),
        ],
        defaultValue: '16',
      },
    ],
  }

  return deepMerge(defaultFields, overrides)
}
