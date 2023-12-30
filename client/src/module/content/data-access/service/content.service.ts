import { apiSlice } from "../../../../lib/store/api/api.slice";
import { IContent, IContentResponse } from "../../../../types";

export const contentApiFun = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createContent: builder.mutation({
      query: (body: IContent) => ({
        url: "/contents",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["usersIdeas"],
    }),

    getUsersIdeas: builder.query({
      query: () => "/contents",
      providesTags: ["usersIdeas"],
      transformResponse: (res: { data: { data: [] } }) => res.data.data,
    }),
    getUserIdeaById: builder.query({
      query: (id: string) => `/contents/${JSON.parse(id)}`,
      // eslint-disable-next-line @typescript-eslint/ban-types
      transformResponse: (res: { data: { data: IContentResponse } }) =>
        res.data.data,
    }),
  }),
});

export const {
  useGetUsersIdeasQuery,
  useGetUserIdeaByIdQuery,
  useCreateContentMutation,
} = contentApiFun;
