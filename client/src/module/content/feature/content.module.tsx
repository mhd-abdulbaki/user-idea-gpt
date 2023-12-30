//@Dev
//#Data Access
import { toggoleIsOpenRed, useGetUsersIdeasQuery } from "..";
//#Shard UI
import {
  ButtonComponent,
  ContainerComponent,
  ListWrapperComponent,
} from "../../../lib/shared";
import { CardComponent } from "../ui/card.component";

//#Store Hooks
import { useAppDispatch } from "../../../lib/store/hooks";
//#Type
import { IContentResponse } from "../../../types";
//#Module
import { CreateContentModule } from "./create-content.module";

export const ContentModule = () => {
  const dispatch = useAppDispatch();

  const { data: dataGetUsersIdeas } = useGetUsersIdeasQuery({});
  console.log(dataGetUsersIdeas);
  return (
    <section className="primary-bg-color" id="content">
      <ContainerComponent>
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Users Ideas
        </h2>
        <ListWrapperComponent>
          {dataGetUsersIdeas && dataGetUsersIdeas?.length !== 0 ? (
            dataGetUsersIdeas.map((idea: IContentResponse) => (
              <CardComponent
                key={idea._id}
                title={idea.websiteName}
                description={idea.websiteDescription}
                href={idea._id}
              />
            ))
          ) : (
            <div className="col-span-3">
              <h2 className=" text-2xl tracking-tight font-extrabold text-gray-700 dark:text-gray-400 text-center">
                There&rsquo;s no Ideas to show
              </h2>

              <ButtonComponent
                onClick={() => dispatch(toggoleIsOpenRed())}
                className="rounded-lg !text-white primary-gradient mt-6"
              >
                Create New Contents
              </ButtonComponent>
            </div>
          )}
        </ListWrapperComponent>
      </ContainerComponent>
      <CreateContentModule />
    </section>
  );
};
