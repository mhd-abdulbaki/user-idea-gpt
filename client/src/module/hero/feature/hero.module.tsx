import {
  ButtonComponent,
  ContainerComponent,
  TypographyComonent,
} from "../../../lib/shared";
import { useAppDispatch } from "../../../lib/store/hooks";
import { toggoleIsOpenRed } from "../../content";

export const HeroModule = () => {
  //@Init
  const dispatch = useAppDispatch();

  return (
    <section className="primary-bg-color" id="home">
      <ContainerComponent>
        <TypographyComonent
          variant="title"
          fontSize="text-4xl"
          fontWeight="font-extrabold"
          color="dark:text-white text-gray-900"
          className="mb-4 tracking-tight leading-none  md:text-5xl lg:text-6xl "
        >
          Welcome to Demo
        </TypographyComonent>
        <TypographyComonent
          variant="body"
          color="text-gray-500 dark:text-gray-400"
          className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 "
        >
          Dive into the world of Islamic knowledge and creativity with Demo. A
          space where your ideas come to life and your voice is heard.
        </TypographyComonent>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <ButtonComponent
            onClick={() => dispatch(toggoleIsOpenRed())}
            className="rounded-lg !text-white primary-gradient"
          >
            Create New Contents
          </ButtonComponent>
        </div>
      </ContainerComponent>
    </section>
  );
};
