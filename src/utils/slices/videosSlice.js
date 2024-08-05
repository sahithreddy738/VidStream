import { createSlice } from "@reduxjs/toolkit";


const videosSlice=createSlice({
    name:"videos",
    initialState:{
        videoCategories:[],
        popularVideos:[],
        searchVideos:[]
    },
    reducers:{
        addVideoCategories:(state,action) =>{
            state.videoCategories=action.payload
        },
        addPopularVideos:(state,action) =>{
            state.popularVideos=action.payload
        },
        addSearchVideos:(state,action) =>{
            state.searchVideos=action.payload
        }
    }
})
export const {addVideoCategories,addPopularVideos,addSearchVideos}=videosSlice.actions;
export default videosSlice.reducer;