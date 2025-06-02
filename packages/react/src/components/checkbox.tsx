'use client'

import { Checkbox as BaseCheckbox } from '@chakra-ui/react'
import React from 'react'

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { children, ...props },
  ref,
) {
  return (
    <BaseCheckbox.Root {...props}>
      <BaseCheckbox.HiddenInput ref={ref} />
      <BaseCheckbox.Control>
        <BaseCheckbox.Indicator />
      </BaseCheckbox.Control>
      {children && <BaseCheckbox.Label>{children}</BaseCheckbox.Label>}
    </BaseCheckbox.Root>
  )
})
export interface CheckboxProps extends BaseCheckbox.RootProps {}
