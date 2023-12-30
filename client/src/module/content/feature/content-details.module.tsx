// @Third Party
import { useParams } from "react-router-dom";

//@Dev
//#Data Access
import { useGetUserIdeaByIdQuery } from "..";

// #Shared UI
import { ContainerComponent } from "../../../lib/shared";

export const ContentDetailsModule = () => {
  const { id } = useParams();

  const { data: dataGetUserIdea } = useGetUserIdeaByIdQuery(JSON.stringify(id));

  return (
    <section className="primary-bg-color min-h-[88vh]">
      <ContainerComponent>
        <div
          className="dark:text-gray-200 text-gray-900"
          dangerouslySetInnerHTML={{
            __html: dataGetUserIdea?.contents ? dataGetUserIdea?.contents : "",
          }}
        ></div>
      </ContainerComponent>
    </section>
  );
};
