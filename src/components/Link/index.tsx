import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'
import * as LucideIcons from 'lucide-react'
import type { LucideProps } from 'lucide-react'

import type { Page, Post } from '@/payload-types'

type CMSLinkType = {
  appearance?: 'inline' | ButtonProps['variant']
  children?: React.ReactNode
  className?: string
  label?: string | null
  icon?: string | null
  iconPosition?: 'before' | 'after' | null
  iconSize?: '16' | '20' | '24' | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | Post | string | number
  } | null
  size?: ButtonProps['size'] | null
  radius?: ButtonProps['radius'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance = 'inline',
    children,
    className,
    label,
    icon,
    iconPosition = 'after',
    iconSize,
    newTab,
    reference,
    size = 'default',
    radius = 'default',
    url,
  } = props

  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  if (!href) return null

  // const size = appearance === 'link' ? 'clear' : sizeFromProps
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  /* Ensure we don't break any styles set by richText */
  if (appearance === 'inline') {
    const Icon = icon
      ? (LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>)[icon]
      : null

    return (
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {iconPosition === 'before' && Icon ? (
          <Icon className="inline-block" size={iconSize || '16'} />
        ) : null}

        {label && label}
        {children && children}

        {iconPosition === 'after' && Icon ? (
          <Icon className="inline-block" size={iconSize || '16'} />
        ) : null}
      </Link>
    )
  }

  return (
    <Button asChild className={className} size={size} variant={appearance} radius={radius}>
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {(() => {
          const Icon = icon
            ? (LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>)[icon]
            : null

          return (
            <>
              {iconPosition === 'before' && Icon ? (
                <Icon className="inline-block" size={iconSize || '16'} />
              ) : null}

              {label && label}
              {children && children}

              {iconPosition === 'after' && Icon ? (
                <Icon className="inline-block" size={iconSize || '16'} />
              ) : null}
            </>
          )
        })()}
      </Link>
    </Button>
  )
}
