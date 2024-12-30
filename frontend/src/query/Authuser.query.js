import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const AuthuserApi = createApi({
    reducerPath: "AuthuserApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1" }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (obj) => ({
                url: "/auth/adminregister",
                method: "POST",
                body: obj
            }),
        }),
        loginUser: builder.mutation({
            query: (obj) => ({
                url: "/auth/adminlogin",
                method: "POST",
                body: obj
            }),
        }),
    }),
});
export const { useRegisterUserMutation,useLoginUserMutation } = AuthuserApi;