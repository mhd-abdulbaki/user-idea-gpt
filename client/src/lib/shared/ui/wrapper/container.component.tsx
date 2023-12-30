import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string | undefined;
}

export const ContainerComponent = ({ children, className }: IProps) => {
  return (
    <div
      className={`${className} py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12`}
    >
      {children}
    </div>
  );
};
