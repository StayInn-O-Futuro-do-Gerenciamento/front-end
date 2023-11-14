import { IFormProps } from "./type";
import { StyledForm } from "./style";

export const Form = ({
  children,
  noValidate,
  onSubmit,
  className,
}: IFormProps) => {
  return (
    <StyledForm
      className={className}
      noValidate={noValidate}
      onSubmit={onSubmit}
    >
      {children}
    </StyledForm>
  );
};
