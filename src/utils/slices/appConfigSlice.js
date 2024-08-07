import { createSlice } from "@reduxjs/toolkit";


const appConfigSlice=createSlice({
    name:"appConfig",
    initialState:{
        loading:false
    },
    reducers:{
        toggleLoading:(state,action) =>{
            state.loading=action.payload
        }
    }
})

export const {toggleLoading}=appConfigSlice.actions;
export default appConfigSlice.reducer;