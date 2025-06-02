'use client'

import { Field as BaseField } from '@chakra-ui/react'

export const Field = ({ children, errorText, helperText, label, ...props }: FieldProps) => {
  return (
    <BaseField.Root invalid={!!errorText} {...props}>
      {label && (
        <BaseField.Label>
          {label}
          {props.required && <BaseField.RequiredIndicator />}
        </BaseField.Label>
      )}
      {children}
      {helperText && <BaseField.HelperText />}
      {errorText && <BaseField.ErrorText />}
    </BaseField.Root>
  )
}
export type FieldProps = BaseField.RootProps & {
  errorText?: React.ReactNode
  helperText?: React.ReactNode
  label?: React.ReactNode
}
