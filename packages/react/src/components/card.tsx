'use client'

import { Card as BaseCard } from '@chakra-ui/react'

export const Card = ({ children, footer, header, ...props }: CardProps) => {
  return (
    <BaseCard.Root {...props}>
      {header && <BaseCard.Header>{header}</BaseCard.Header>}
      <BaseCard.Body>{children}</BaseCard.Body>
      {footer && <BaseCard.Footer>{footer}</BaseCard.Footer>}
    </BaseCard.Root>
  )
}
export type CardProps = BaseCard.RootProps & {
  header?: React.ReactNode
  footer?: React.ReactNode
}
