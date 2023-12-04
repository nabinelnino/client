import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const psetsApi = createApi({
  reducerPath: "psetsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/api/" }),
  endpoints: (builder) => ({
    getAllpsets: builder.query({
      query: () => "psets",
    }),
    getPsetsDatabase: builder.query({
      query: `psets-database`,
    }),
  }),
});

export const { useGetAllpsetsQuery, useGetPsetsDatabaseQuery } = psetsApi;
