'use client'

import { Tag as BaseTag } from '@chakra-ui/react'
import React from 'react'

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(function Tag(
  { startElement, endElement, onClose, closable = !!onClose, children, ...rest },
  ref,
) {
  return (
    <BaseTag.Root ref={ref} {...rest}>
      {startElement && <BaseTag.StartElement>{startElement}</BaseTag.StartElement>}
      <BaseTag.Label>{children}</BaseTag.Label>
      {endElement && <BaseTag.EndElement>{endElement}</BaseTag.EndElement>}
      {closable && (
        <BaseTag.EndElement>
          <BaseTag.CloseTrigger onClick={onClose} />
        </BaseTag.EndElement>
      )}
    </BaseTag.Root>
  )
})
export interface TagProps extends BaseTag.RootProps {
  closable?: boolean
  endElement?: React.ReactNode
  onClose?: VoidFunction
  startElement?: React.ReactNode
}
