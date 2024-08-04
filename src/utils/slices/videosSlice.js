import { createSlice } from "@reduxjs/toolkit";


const videosSlice=createSlice({
    name:"videos",
    initialState:{
        videoCategories:[],
        popularVideos:[]
    },
    reducers:{
        addVideoCategories:(state,action) =>{
            state.videoCategories=action.payload
        },
        addPopularVideos:(state,action) =>{
            state.popularVideos=action.payload
        }
    }
})
export const {addVideoCategories,addPopularVideos}=videosSlice.actions;
export default videosSlice.reducer;