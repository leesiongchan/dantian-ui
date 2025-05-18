"use client";

import {
  ActionBar as BaseActionBar,
  CloseButton,
  Portal,
} from "@chakra-ui/react";
import React from "react";

export const ActionBar = ({
  actionTriggers,
  closeable,
  onClose,
  selectionTrigger,
  ...props
}: ActionBarProps) => {
  return (
    <BaseActionBar.Root {...props}>
      <Portal>
        <BaseActionBar.Positioner>
          <BaseActionBar.Content>
            {selectionTrigger && (
              <BaseActionBar.SelectionTrigger>
                {selectionTrigger}
              </BaseActionBar.SelectionTrigger>
            )}

            {actionTriggers && actionTriggers.length > 0 && (
              <>
                <BaseActionBar.Separator />
                {actionTriggers}
              </>
            )}

            {closeable && (
              <BaseActionBar.CloseTrigger asChild onClick={onClose}>
                <CloseButton size="sm" />
              </BaseActionBar.CloseTrigger>
            )}
          </BaseActionBar.Content>
        </BaseActionBar.Positioner>
      </Portal>
    </BaseActionBar.Root>
  );
};
export interface ActionBarProps
  extends Omit<BaseActionBar.RootProps, "children"> {
  actionTriggers?: React.ReactNode[];
  closeable?: boolean;
  onClose?: VoidFunction;
  selectionTrigger?: React.ReactNode;
}
