import { ChangeEvent } from "react";

interface IInput {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ value, onChange }: IInput) {
  return <input type="text" value={value} onChange={onChange} />;
}
