import { baseApi } from "./baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    initiateBooking: build.mutation({
      query: (payload) => ({
        url: "/booking/book-trip",
        method: "POST",
        data: payload,
        contentType: "application/json",
      }),
      invalidatesTags: ["booking"],
    }),

  }),
});

export const {
  useInitiateBookingMutation
} = bookingApi;
