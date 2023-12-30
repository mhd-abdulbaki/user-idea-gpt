import { ReactNode } from "react";

interface IProps {
  children: ReactNode | string;
  className?: string | undefined;
  onClick?: () => void;
  type?: "submit" | "button";
  disabled?: boolean | undefined;
}

export const ButtonComponent = ({
  children,
  className,
  onClick,
  type = "button",
  disabled,
}: IProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick ? () => onClick() : () => {}}
      className={`inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg  dark:text-white   ${className}`}
    >
      {children}
    </button>
  );
};
