import { StyledButton } from "./style";
import { IButtonProps } from "./type";

export const Button = ({
  children,
  type,
  onClick,
  buttonVariation,
}: IButtonProps) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      buttonVariation={buttonVariation}
    >
      {children}
    </StyledButton>
  );
};
