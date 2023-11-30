import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface iInputProps {
  type: "text" | "number" | "password" | "email" | "file" | "hidden" | "date";
  className?: string;
  placeholder?: string;
  label?: string;
  register?: UseFormRegisterReturn;
  defaultValue?: number | string;
  disable?: boolean;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  min?: any;
  max?: any;
}
