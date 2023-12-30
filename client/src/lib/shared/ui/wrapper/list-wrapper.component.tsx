import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string | undefined;
}

export const ListWrapperComponent = ({ children, className }: IProps) => {
  return (
    <div
      className={`grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
    >
      {children}
    </div>
  );
};
