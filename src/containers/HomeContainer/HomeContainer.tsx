import { FC } from "react";
import { Dashboard } from "@/components";

export interface HomeContainerProps {}

export const HomeContainer: FC<HomeContainerProps> = () => {
  return (
    <>
      <Dashboard />
    </>
  );
};
