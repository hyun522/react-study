import styled, { css } from "styled-components";
import { ButtonProps } from ".";

const buttonVariantStyles = {
  default: css`
    background-color: #007bff;
    color: white;
  `,
  primary: css`
    background-color: #28a745;
    color: white;
  `,
  success: css`
    background-color: #17a2b8;
    color: white;
  `,
  warning: css`
    background-color: #ffc107;
    color: black;
  `,
  error: css`
    background-color: #dc3545;
    color: white;
  `,
};

const buttonSizeStyles = {
  sm: css`
    padding: 6px 12px;
    font-size: 14px;
  `,
  md: css`
    padding: 8px 16px;
    font-size: 16px;
  `,
  lg: css`
    padding: 10px 20px;
    font-size: 18px;
  `,
  xl: css`
    padding: 10px 24px;
    font-size: 24px;
  `,
};

const shouldForwardProp = (prop: string) => !["variant", "size"].includes(prop);

export const BaseButton = styled.button.attrs<ButtonProps>((props) => ({
  variant: props.variant || "default",
  size: props.size || "md",
}))<ButtonProps>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${(props) => buttonVariantStyles[props.variant]};
  ${(props) => buttonSizeStyles[props.size]};

  &:not(:disabled):hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: #ddd;
    color: #eee;
  }
`;

export default BaseButton;
