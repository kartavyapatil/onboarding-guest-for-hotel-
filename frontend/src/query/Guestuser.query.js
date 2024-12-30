import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const GuestApi = createApi({
    reducerPath: 'GuestApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1' }),
    endpoints: (builder) => ({
        registerGuest: builder.mutation({
            query: (obj) => ({
                url: "/guest/guestregister",
                method: "POST",
                body: obj,
            }),
        }),
        loginGuest: builder.mutation({
            query: (obj) => ({
                url: "/guest/guestlogin",
                method: "POST",
                body: obj,
            }),
        }),
    }),
});

export const {useLoginGuestMutation,useRegisterGuestMutation} = GuestApi;
