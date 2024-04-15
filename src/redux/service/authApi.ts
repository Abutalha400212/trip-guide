import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (payload) => ({
        url: "/auth/signup",
        method: "post",
        data: payload,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: ["auth"],
    }),
    login: build.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "post",
        data: payload,
        contentType: "application/json",
      }),
      invalidatesTags: ["auth"],
    }),
    getUserByEmail: build.query({
      query: () => ({
        url: `/auth/get-user`,
        method: "get",
      }),
      providesTags: ["auth"],
    }),
  }),
});

export const {useSignUpMutation,useLoginMutation,useGetUserByEmailQuery } =
  authApi;
