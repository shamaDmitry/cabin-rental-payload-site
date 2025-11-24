import type { DateField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl } from 'react-hook-form'

import { Label } from '@/components/ui/label'

import React from 'react'
import { Controller } from 'react-hook-form'

import { Error } from '@/blocks/Form/Error'
import { Width } from '@/blocks/Form/Width'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'

export const Datepicker: React.FC<
  DateField & {
    control: Control
    errors: Partial<FieldErrorsImpl>
  }
> = ({ name, control, errors, label, required, width }) => {
  return (
    <Width width={width}>
      <Label htmlFor={name}>
        {label}
        {required && (
          <span className="required">
            * <span className="sr-only">(required)</span>
          </span>
        )}
      </Label>

      <Controller
        control={control}
        defaultValue=""
        name={name}
        render={({ field }) => {
          const { onChange, value } = field

          return (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  data-empty={!value}
                  className="data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="size-5 mr-1.5" />
                  {value ? format(value, 'PP') : <span className="normal-case">Pick a date</span>}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={value} onSelect={onChange} {...field} />
              </PopoverContent>
            </Popover>
          )
        }}
        rules={{ required }}
      />

      {errors[name] && <Error name={name} />}
    </Width>
  )
}
