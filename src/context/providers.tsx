import { AppProviders } from "./appContext";

interface iProvider {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProvider) => {
  return <AppProviders>{children}</AppProviders>;
};
