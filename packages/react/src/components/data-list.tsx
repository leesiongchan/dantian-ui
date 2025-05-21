"use client";

import { DataList as BaseDataList } from "@chakra-ui/react";
import React from "react";

export const DataList = React.forwardRef<HTMLDListElement, DataListProps>(
  function DataList({ items, ...props }, ref) {
    return (
      <BaseDataList.Root ref={ref} {...props}>
        {items.map((item, index) => (
          <BaseDataList.Item key={index}>
            <BaseDataList.ItemLabel>{item.label}</BaseDataList.ItemLabel>
            <BaseDataList.ItemValue>{item.value}</BaseDataList.ItemValue>
          </BaseDataList.Item>
        ))}
      </BaseDataList.Root>
    );
  }
);
export interface DataListProps
  extends Omit<BaseDataList.RootProps, "children"> {
  items: DataListItem[];
}

interface DataListItem {
  label: React.ReactNode;
  value: React.ReactNode;
}
