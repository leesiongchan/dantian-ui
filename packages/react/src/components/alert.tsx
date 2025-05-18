import { Alert as BaseAlert } from "@chakra-ui/react";
import React from "react";

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert({ children, title, showIndicator, ...props }, ref) {
    return (
      <BaseAlert.Root ref={ref} {...props}>
        {showIndicator && <BaseAlert.Indicator />}
        {children ? (
          <BaseAlert.Content>
            {title && <BaseAlert.Title>{title}</BaseAlert.Title>}
            <BaseAlert.Description>{children}</BaseAlert.Description>
          </BaseAlert.Content>
        ) : (
          <BaseAlert.Title flex="1">{title}</BaseAlert.Title>
        )}
      </BaseAlert.Root>
    );
  }
);
export interface AlertProps extends Omit<BaseAlert.RootProps, "title"> {
  showIndicator?: boolean;
  title?: React.ReactNode;
}
