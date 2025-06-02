'use client'

import { Accordion as BaseAccordion } from '@chakra-ui/react'

export const Accordion = ({ items, ...props }: AccordionProps) => {
  return (
    <BaseAccordion.Root {...props}>
      {items.map((item) => (
        <BaseAccordion.Item disabled={item.disabled} key={item.value} value={item.value}>
          <BaseAccordion.ItemTrigger>
            {item.title}
            <BaseAccordion.ItemIndicator />
          </BaseAccordion.ItemTrigger>
          <BaseAccordion.ItemContent>
            <BaseAccordion.ItemBody>{item.body}</BaseAccordion.ItemBody>
          </BaseAccordion.ItemContent>
        </BaseAccordion.Item>
      ))}
    </BaseAccordion.Root>
  )
}
export type AccordionProps = Omit<BaseAccordion.RootProps, 'children'> & {
  items: AccordionItem[]
}

interface AccordionItem {
  body: React.ReactNode
  disabled?: boolean
  title: React.ReactNode
  value: string
}
