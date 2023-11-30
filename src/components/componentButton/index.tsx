import { StyledButton } from "./style";
import { IButtonProps } from "./type";

export const Button = ({
  children,
  type,
  onClick,
  buttonVariation,
  className,
}: IButtonProps) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      buttonVariation={buttonVariation}
      className={className}
    >
      {children}
    </StyledButton>
  );
};
