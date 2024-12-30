import { createSlice } from "@reduxjs/toolkit";

export const userslice=createSlice({
    name:"userslice",
     initialState :{
        value: 0,
      },
    reducers:{
        setUser(state,action){
            state.user=action.payload
        },
        removeUser(state){
            state.user=null
        }, 
        // setUserRole(state, action) {
        //     state.role = action.payload;
        // },
        // removeUserRole(state) {
        //     state.role = null;  
        // },
    }
})

export const {setUser,removeUser }=userslice.actions;
export const userslicepath = (state) => state.userslice.user;