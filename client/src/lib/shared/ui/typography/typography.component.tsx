import React, { ReactNode } from "react";

interface IProps {
  variant: "sub-title" | "title" | "body";
  color?: string;
  fontSize?:
    | "text-xs"
    | "text-sm"
    | "text-md"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl"
    | "text-6xl"
    | "text-7xl"
    | "text-8xl"
    | "text-9xl"
    | string;
  fontWeight?:
    | "font-bold"
    | "font-semibold"
    | "font-extrabold"
    | "font-light"
    | "font-thin"
    | "font-extralight"
    | "font-extralight"
    | "font-medium ";
  className?: string;
  textAlign?:
    | "text-start"
    | "text-center"
    | "text-end"
    | "text-right"
    | "text-left";
  children: ReactNode | string;
  dataAos?: string | undefined;
  dataAosDuration?: string | undefined;
}

export const TypographyComonent: React.FC<IProps> = ({
  variant,
  color,
  fontWeight,
  fontSize,
  textAlign,
  className,
  children,
  dataAos,
  dataAosDuration,
}) => {
  switch (variant) {
    case "title":
      return (
        <h1
          data-aos={dataAos}
          data-aos-duration={dataAosDuration}
          className={`${fontSize} ${fontWeight} ${color}  ${className}`}
        >
          {children}
        </h1>
      );
    case "sub-title":
      return (
        <h3
          data-aos={dataAos}
          data-aos-duration={dataAosDuration}
          className={`uppercase tracking-wider relative md:text-xl text-lg font-normal text-gray-200 ${className}`}
        >
          {children}
          <span className="absolute h-[2px] bg-gray-200 opacity-50 top-1/2 w-8  md:w-20 sm:w-16 transform -translate-y-1/2 translate-x-2"></span>
        </h3>
      );
    default:
      return (
        <p
          data-aos={dataAos}
          data-aos-duration={dataAosDuration}
          className={`${className ? className : null} ${color ? color : "#000"} 
          ${fontWeight ? fontWeight : "font-normal"} ${
            fontSize ? fontSize : "text-lg"
          } ${textAlign && textAlign} leading-loose`}
        >
          {children}
        </p>
      );
  }
};
