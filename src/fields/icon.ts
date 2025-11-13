import deepMerge from '@/utilities/deepMerge'
import type { Field, GroupField } from 'payload'

type IconType = (options?: { overrides?: Partial<GroupField> }) => Field

export const icon: IconType = ({ overrides = {} } = {}) => {
  // export const icon: IconType = () => {
  const linkResult: GroupField = {
    name: 'icon',
    type: 'group',
    required: true,
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        required: true,
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
    ],
  }

  return deepMerge(linkResult, overrides)
}
