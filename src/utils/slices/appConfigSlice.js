import { createSlice } from "@reduxjs/toolkit";


const appConfigSlice=createSlice({
    name:"appConfig",
    initialState:{
        loading:false,
        toggleNav:true
    },
    reducers:{
        toggleLoading:(state,action) =>{
            state.loading=action.payload
        },
        toggleNavBar:(state)=>{
            state.toggleNav=!state.toggleNav
        }
    }
})

export const {toggleLoading,toggleNavBar}=appConfigSlice.actions;
export default appConfigSlice.reducer;