import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addComment: build.mutation({
      query: (payload) => ({
        url: "/place/comment",
        method: "PATCH",
        data: payload,
        contentType: "application/json",
      }),
      invalidatesTags: ["place"],
    }),
    reply: build.mutation({
      query: (payload) => ({
        url: "/place/reply",
        method: "PATCH",
        data: payload,
        contentType: "application/json",
      }),
      invalidatesTags: ["place"],
    }),
   
  }),
});

export const {
 useAddCommentMutation,
 useReplyMutation
} = orderApi;
