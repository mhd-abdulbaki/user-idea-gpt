import { Link } from "react-router-dom";
import { ButtonComponent, TypographyComonent } from "../../../lib/shared";

interface IProps {
  title: string;
  description: string;
  href: string;
}

export const CardComponent = ({ description, href, title }: IProps) => {
  return (
    <article className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>

      <TypographyComonent
        variant="body"
        className="mb-3 font-normal text-gray-700 dark:text-gray-400 !leading-normal"
      >
        {description}
      </TypographyComonent>
      <Link to={`/idea/${href}`}>
        <ButtonComponent className="bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 primary-gradient !py-2 !text-white">
          Read more
        </ButtonComponent>
      </Link>
    </article>
  );
};
