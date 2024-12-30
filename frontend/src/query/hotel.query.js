import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { get } from 'mongoose';

export const hotelApi = createApi({
    reducerPath: 'addhotelApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1' }),
    endpoints: (builder) => ({
        addhotel: builder.mutation({
            query: (obj) => ({
                url: "/hotel/addhotel/",
                method: "POST",
                body: obj,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                  }
            }),
            invalidatesTags:['gethotel']
        }),
        gethotel: builder.query({
            query: () => {
              const token = localStorage.getItem("token");
              return {
                url: "/hotel/gethotel/",
                method: "GET",
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              };
            },
            providesTags:["gethotel"]
          }),
          deleteorder: builder.mutation({
            query: (_id) => ({
                url: "/hotel/deleteorder/"+_id,
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                  }
            }),
            invalidatesTags:["gethotel"]

        }),
          
          
    })
})
export const {useAddhotelMutation,useGethotelQuery,useDeleteorderMutation} = hotelApi;
console.log(useGethotelQuery)