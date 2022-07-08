import { createAPI, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ENVAPI } from "../../config";

export const authAPI = createAPI({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${ENVAPI}/api`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (acc) => ({
        url: `/login`,
        method: "POST",
        body: acc,
        credentials: "include",
      }),
    }),
    refresh: build.mutation({
      query: () => ({
        url: `/refresh-tokens`,
        method: "POST",
        credentials: "include",
      }),
    }),
  }),
});
