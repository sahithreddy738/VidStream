import { createSlice } from "@reduxjs/toolkit";


const watchSlice=createSlice({
 name:"watch",
 initialState:{
    comments:[],
    videoInfo:[],
    showReplies:false
 },
 reducers:{
    addComments:(state,action)=>{
        state.comments=action.payload
    },
    addVideoInfo:(state,action)=>{
        state.videoInfo=action.payload
    } ,
    toggleReplies:(state)=>{
       state.showReplies=!state.showReplies
    }}
})

export const {addComments,addVideoInfo,toggleReplies}=watchSlice.actions;

export default watchSlice.reducer;