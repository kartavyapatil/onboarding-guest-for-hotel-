import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const guestformApi = createApi({
    reducerPath: 'guestformApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:8000/api/v1'}),
    endpoints:(builder)=>({
        addguestform:builder.mutation({
            query:(obj)=>({
                url:'/guestformdetails/addguest/',
                method:'POST',
                body:obj,
                headers:{
                    "Authorization":'Bearer '+localStorage.getItem('token')
                }
            }),
            invalidatesTags:['getguestform']
        }),
        getguestform:builder.query({
            query:()=>({
                    url: "/guestformdetails/getguest/",
                    method: "GET",
                    headers: {
                    "Authorization":'Bearer '+localStorage.getItem('token')
                    },
            }),
            providesTags:["getguestform"]
        }),
        deleteguest: builder.mutation({
            query: (_id) => ({
                url: "/guestformdetails/deleteguest/"+_id,
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                  }
            }),
            invalidatesTags:["getguestform"]

        }),
    })  
    })
export const {useAddguestformMutation ,useGetguestformQuery , useDeleteguestMutation} = guestformApi;

