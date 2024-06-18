import React, { ChangeEventHandler } from "react";

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const Input = ({ value, onSubmit, onChange }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} />
      <button type="submit">추가하기</button>
    </form>
  );
};

export default Input;
