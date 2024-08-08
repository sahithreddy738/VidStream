import { createSlice } from "@reduxjs/toolkit";


const appConfigSlice=createSlice({
    name:"appConfig",
    initialState:{
        loading:false,
        toggleNav:true,
        chatMessages:[]
    },
    reducers:{
        toggleLoading:(state,action) =>{
            state.loading=action.payload
        },
        toggleNavBar:(state)=>{
            state.toggleNav=!state.toggleNav
        },
        addChatMessages:(state,action) =>{
            state.chatMessages.unshift(action.payload);
            state.chatMessages.splice(10);
        },
    }
})

export const {toggleLoading,toggleNavBar,addChatMessages}=appConfigSlice.actions;
export default appConfigSlice.reducer;