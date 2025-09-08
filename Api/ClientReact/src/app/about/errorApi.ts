import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuerywithErrorHandling } from "../api/baseapi";

export const errorApi = createApi({
  reducerPath: "errorApi",
  baseQuery: baseQuerywithErrorHandling,
  endpoints: (builder) => ({
    get400Error: builder.query<void, void>({
      query: () => ({ url: "buggy/bad-request" }),
    }),
    get404Error: builder.query<void, void>({
      query: () => ({ url: "buggy/not-found" }),
    }),
    get500Error: builder.query<void, void>({
      query: () => ({ url: "buggy/server-error" }),
    }),
    get401Error: builder.query<void, void>({
      query: () => ({ url: "buggy/unauthorized" }),
    }),
    getValidationError: builder.query<void, void>({
      query: () => ({ url: "buggy/validation-error" }),
    }),
  }),
});

export const {
  useLazyGet400ErrorQuery,
  useLazyGet404ErrorQuery,
  useLazyGet500ErrorQuery,
  useLazyGet401ErrorQuery,
  useLazyGetValidationErrorQuery,
} = errorApi;
