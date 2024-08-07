import { createSlice } from "@reduxjs/toolkit";


const watchSlice=createSlice({
 name:"watch",
 initialState:{
    comments:[],
    videoInfo:[],
    showReplies:false,
    commentPageToken:null
 },
 reducers:{
    addComments:(state,action)=>{
        const comments=state.comments?.map((c)=>c.id);
        const filteredComments=action.payload?.filter((c)=>!comments.includes(c.id));
        filteredComments?.map((c)=>state.comments.push(c));
    },
    addVideoInfo:(state,action)=>{
        state.videoInfo=action.payload
    } ,
    toggleReplies:(state)=>{
       state.showReplies=!state.showReplies
    },
    addCommentPageToken:(state,action) => {
        state.commentPageToken=action.payload;
    },
    removeComments:(state) =>{
        state.comments=[];
        state.videoInfo=[];
    }
 }
})

export const {addComments,addVideoInfo,toggleReplies,addCommentPageToken,removeComments}=watchSlice.actions;

export default watchSlice.reducer;