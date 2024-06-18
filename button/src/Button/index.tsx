import React, { ReactNode } from "react";
import { BaseButton } from "./style";

type Variant = "default" | "primary" | "success" | "warning" | "error";
type Size = "sm" | "md" | "lg" | "xl";

export interface ButtonProps {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: Variant;
  size?: Size;
}

export default function Button({ children, onClick, variant, size, disabled }: ButtonProps) {
  return (
    <BaseButton disabled={disabled} onClick={onClick} size={size} variant={variant}>
      {children}
    </BaseButton>
  );
}
