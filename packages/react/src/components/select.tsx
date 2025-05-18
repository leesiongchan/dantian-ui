"use client";

import {
  Select as BaseSelect,
  createListCollection,
  Portal,
} from "@chakra-ui/react";

export const Select = ({ items, placeholder, ...props }: SelectProps) => {
  const collection = createListCollection({
    items,
    isItemDisabled: (item) => item.disabled ?? false,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
  });

  return (
    <BaseSelect.Root {...props} collection={collection}>
      <BaseSelect.HiddenSelect />
      <BaseSelect.Control>
        <BaseSelect.Trigger>
          <BaseSelect.ValueText placeholder={placeholder} />
        </BaseSelect.Trigger>
        <BaseSelect.IndicatorGroup>
          <BaseSelect.Indicator />
        </BaseSelect.IndicatorGroup>
      </BaseSelect.Control>
      <Portal>
        <BaseSelect.Positioner>
          <BaseSelect.Content>
            {collection.items.map((item) => (
              <BaseSelect.Item item={item} key={item.value}>
                {item.label}
                <BaseSelect.ItemIndicator />
              </BaseSelect.Item>
            ))}
          </BaseSelect.Content>
        </BaseSelect.Positioner>
      </Portal>
    </BaseSelect.Root>
  );
};
export interface SelectProps
  extends Omit<BaseSelect.RootProps, "children" | "collection"> {
  items: SelectItem[];
  placeholder?: string;
}

interface SelectItem {
  disabled?: boolean;
  label: string;
  value: string;
}
