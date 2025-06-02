'use client'

import { Field as BaseField } from '@chakra-ui/react'

export const Field = ({ children, ...props }: FieldProps) => {
  return (
    <BaseField.Root {...props}>
      <BaseField.Label>
        <BaseField.RequiredIndicator />
      </BaseField.Label>
      {children}
      <BaseField.HelperText />
      <BaseField.ErrorText />
    </BaseField.Root>
  )
}
export type FieldProps = BaseField.RootProps
