import { FAQModule } from "../../faq";
import { HeroModule } from "../../hero";
import { ContentModule } from "../../content";
import { IntroductionModule } from "../../introduction";

export const HomeModule = () => {
  return (
    <>
      <HeroModule />
      <IntroductionModule />
      <ContentModule />
      <FAQModule />
    </>
  );
};
