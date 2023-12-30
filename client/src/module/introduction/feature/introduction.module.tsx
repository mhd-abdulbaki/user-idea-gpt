import { TypographyComonent } from "../../../lib/shared";

export const IntroductionModule = () => {
  return (
    <section className="bg-white dark:bg-gray-900" id="introduction">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            How It Works
          </h2>
          <TypographyComonent variant="body" className="mb-4">
            Crafted by OpenAI: Your ideas will be transformed into engaging
            content using advanced language models, ensuring a thoughtful and
            impactful representation.
          </TypographyComonent>
          <p>
            Community Engagement: Once your content is generated, it will be
            shared with our community. Readers can engage, discuss, and
            appreciate the diverse perspectives contributed by individuals like
            you.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};
