import { configureStore } from "@reduxjs/toolkit";
import {userslice} from "../slice/user.slice";
import {setupListeners} from "@reduxjs/toolkit/query";
import {AuthuserApi} from "../query/Authuser.query";   
import { GuestApi } from "../query/Guestuser.query";             
import { hotelApi } from "../query/hotel.query";
import { guestformApi } from "../query/Guestformdetails";
export const store = configureStore({
    reducer: {
        [userslice.name]:userslice.reducer,
        [AuthuserApi.reducerPath]: AuthuserApi.reducer,
        [GuestApi.reducerPath]:GuestApi.reducer,
        [hotelApi.reducerPath]:hotelApi.reducer,
        [guestformApi.reducerPath]:guestformApi.reducer
    },
    middleware:(d)=>d().concat(AuthuserApi.middleware,GuestApi.middleware,hotelApi.middleware,guestformApi.middleware)
});
setupListeners(store.dispatch);