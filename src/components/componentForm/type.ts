import React from "react";

export interface IFormProps {
  children?: React.ReactNode;
  noValidate?: boolean | undefined;
  onSubmit?: () => void;
  className?: string;
}
