import { baseApi } from "./baseApi";

const placeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addPlace: build.mutation({
      query: (payload) => ({
        url: "/place/add-place",
        method: "post",
        data: payload,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: ["place"],
    }),
    getPlaces: build.query({
      query: (arg) => ({
        url: `/place`,
        method: "get",
       params:arg
      }),
      providesTags: ["place"],
    }),
    getPlaceById: build.query({
      query: (id) => ({
        url: `/place/${id}`,
        method: "get",
       
      }),
      providesTags: ["place"],
    }),
    // deleteProduct: build.mutation({
    //   query: (id) => ({
    //     url: `/products/delete-product/${id}`,
    //     method: "delete",
    //   }),
    //   invalidatesTags: ["product","auth"],
    // }),
    // getProductById: build.query({
    //   query: (id) => ({
    //     url: `/products/${id}`,
    //     method: "get",
    //   }),
    //   providesTags: ["product"],
    // }),
  }),
});

export const {
  useAddPlaceMutation,
  useGetPlacesQuery,
  useGetPlaceByIdQuery
} = placeApi;
