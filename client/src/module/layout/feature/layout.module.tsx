import { ReactNode } from "react";
import { FooterModule } from "./footer.module";
import { NavbarModule } from "./navbar.module";

interface IProps {
  children: ReactNode;
}

export const LayoutModule = ({ children }: IProps) => {
  return (
    <main>
      <NavbarModule />
      {children}
      <FooterModule />
    </main>
  );
};
