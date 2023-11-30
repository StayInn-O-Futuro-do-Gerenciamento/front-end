import { StyledContainerButton } from "./style";

export const ContainerButtonModal = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <StyledContainerButton>{children}</StyledContainerButton>;
};
