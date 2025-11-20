'use client'

import React from 'react'
import { FieldLabel } from '@payloadcms/ui'
import type { SelectFieldLabelClientComponent } from 'payload'

export const IconSelectLabel: SelectFieldLabelClientComponent = ({ field, path }) => {
  return <FieldLabel label={field?.label || field?.name} path={path} required={field?.required} />
}
