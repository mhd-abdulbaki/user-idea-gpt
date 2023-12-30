interface IProps {
  href: string;
  text: string;
}

export const NavLinkComponent = ({ href, text }: IProps) => {
  return (
    <a
      href={href}
      className="block py-2 px-3 text-slate-900 bg-blue-700 rounded md:bg-transparent hover:text-blue-700 md:p-0 dark:text-white "
      aria-current="page"
    >
      {text}
    </a>
  );
};
