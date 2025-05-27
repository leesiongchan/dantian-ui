"use client";

import {
  Select as BaseSelect,
  createListCollection,
  Portal,
  UseSelectProps,
} from "@chakra-ui/react";
import { groupBy } from "es-toolkit";

export const Select = ({ items, placeholder, ...props }: SelectProps) => {
  const collection = createListCollection({
    items,
    isItemDisabled: (item) => item.disabled ?? false,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
  });
  const categories = Object.entries(
    groupBy(collection.items, (item) => item.category || "other")
  );

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
            {categories.length > 1 &&
              categories.map(([category, items]) => (
                <BaseSelect.ItemGroup key={category}>
                  <BaseSelect.ItemGroupLabel
                    textTransform="uppercase"
                    fontSize="xs"
                    color="fg.muted"
                    letterSpacing="wider"
                    fontWeight="medium"
                  >
                    {category}
                  </BaseSelect.ItemGroupLabel>
                  {items.map((item) => (
                    <BaseSelect.Item item={item} key={item.value}>
                      {item.label}
                      <BaseSelect.ItemIndicator />
                    </BaseSelect.Item>
                  ))}
                </BaseSelect.ItemGroup>
              ))}
            {categories.length === 1 &&
              collection.items.map((item) => (
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
  extends Omit<UseSelectProps<SelectItem>, "collection"> {
  items: SelectItem[];
  placeholder?: string;
}

interface SelectItem {
  category?: string;
  disabled?: boolean;
  label: string;
  value: string;
}
