import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.pexels.com/v1/";

export const pexelApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders(headers) {
      headers.set(
        "Authorization",
        "U15CK1Ev39Xh3Q0nore4QeEra7YJC2J2sBVp6sJlrFkkErNIzT3hLB8Y"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchForImages: builder.query({
      query: (category: string) => `search/?${category}`,
    }),
    searchForCuratedImages: builder.query({
      query: () => "curated/?per_page=50",
    }),
    searchForPhoto: builder.query({
      query: (photoId: number) => `/photos/${photoId}`,
    }),
  }),
});

export const {
  useSearchForImagesQuery,
  useSearchForCuratedImagesQuery,
  useSearchForPhotoQuery,
} = pexelApi;
