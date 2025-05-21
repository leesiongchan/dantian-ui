"use client";

import { Breadcrumb as BaseBreadcrumb, Show } from "@chakra-ui/react";
import React from "react";

export const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  function Breadcrumb({ separator, items, ...props }, ref) {
    return (
      <BaseBreadcrumb.Root ref={ref} {...props}>
        <BaseBreadcrumb.List>
          {items.map((item, index) => {
            const last = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                <BaseBreadcrumb.Item>
                  <BaseBreadcrumb.Link href={item.url}>
                    {item.title}
                  </BaseBreadcrumb.Link>
                </BaseBreadcrumb.Item>
                <Show
                  when={last}
                  fallback={
                    <BaseBreadcrumb.Separator>
                      {separator}
                    </BaseBreadcrumb.Separator>
                  }
                >
                  <BaseBreadcrumb.Item>
                    <BaseBreadcrumb.CurrentLink>
                      {item.title}
                    </BaseBreadcrumb.CurrentLink>
                  </BaseBreadcrumb.Item>
                </Show>
              </React.Fragment>
            );
          })}
        </BaseBreadcrumb.List>
      </BaseBreadcrumb.Root>
    );
  }
);
export interface BreadcrumbProps extends BaseBreadcrumb.RootProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

interface BreadcrumbItem {
  title: React.ReactNode;
  url?: string;
}
