import { ReactNode } from "react";
import { Button } from "./style";

interface Props {
  children: ReactNode;
  state: string;
}

const PrimaryButton = ({ children, state }: Props) => {
  return <Button state={state}>{children}</Button>;
};

export default PrimaryButton;
