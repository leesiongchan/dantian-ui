'use client'

import {
  Combobox as BaseCombobox,
  Highlight,
  Portal,
  useComboboxContext,
  useFilter,
  useListCollection,
} from '@chakra-ui/react'

export const Combobox = ({ items: initialItems, label, ...props }: ComboboxProps) => {
  const { contains } = useFilter({ sensitivity: 'base' })
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  })

  return (
    <BaseCombobox.Root
      {...props}
      collection={collection}
      onInputValueChange={(e) => {
        filter(e.inputValue)
        props.onInputValueChange?.(e)
      }}
    >
      {label && <BaseCombobox.Label>{label}</BaseCombobox.Label>}
      <BaseCombobox.Control>
        <BaseCombobox.Input />
        <BaseCombobox.IndicatorGroup>
          <BaseCombobox.ClearTrigger />
          <BaseCombobox.Trigger />
        </BaseCombobox.IndicatorGroup>
      </BaseCombobox.Control>
      <Portal>
        <BaseCombobox.Positioner>
          <BaseCombobox.Content>
            <BaseCombobox.Empty>No items found</BaseCombobox.Empty>
            {collection.items.map((item) => (
              <ComboboxItem {...item} key={item.value} />
            ))}
          </BaseCombobox.Content>
        </BaseCombobox.Positioner>
      </Portal>
    </BaseCombobox.Root>
  )
}
export type ComboboxProps = Omit<BaseCombobox.RootProps, 'collection'> & {
  items: ComboboxItemProps[]
  label?: React.ReactNode
}

const ComboboxItem = (props: ComboboxItemProps) => {
  const combobox = useComboboxContext()

  return (
    <BaseCombobox.Item item={props}>
      <BaseCombobox.ItemText>
        <Highlight
          ignoreCase
          query={combobox.inputValue}
          styles={{ bg: 'yellow', fontWeight: 'medium' }}
        >
          {props.label}
        </Highlight>
      </BaseCombobox.ItemText>
    </BaseCombobox.Item>
  )
}

interface ComboboxItemProps {
  label: string
  value: string
}
