import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "omit",
  }),
  tagTypes: ["usersIdeas"],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({}),
});
