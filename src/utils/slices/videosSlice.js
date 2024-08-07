import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videoCategories: [],
    popularVideos: [],
    searchVideos: [],
    searchVideoPageToken:null,
    popularVideoPageToken:null    
  },
  reducers: {
    addVideoCategories: (state, action) => {
      state.videoCategories = action.payload;
    },
    addPopularVideos: (state, action) => {
      const currentVideoIds = new Set(state.popularVideos?.map(video => video.id));
      const filteredVideos = action.payload?.filter(video => !currentVideoIds.has(video.id));
       filteredVideos?.map((video)=>state.popularVideos.push(video));
    },
    addSearchVideos: (state, action) => {
      const currentVideoIds = new Set(state.searchVideos?.map(video => video.id.videoId));
      const filteredVideos = action.payload?.filter(video => !currentVideoIds.has(video.id.videoId));
       filteredVideos?.map((video)=>state.searchVideos.push(video));
    },
    addSearchVideoPageToken:(state,action) => {
        state.searchVideoPageToken=action.payload
    },
    addPopularVideoPageToken:(state,action) => {
      state.popularVideoPageToken=action.payload
    },
    removeSearchVideos:(state) => {
      state.searchVideos=[]
    }
  },
});
export const {
  addVideoCategories,
  addPopularVideos,
  addSearchVideos,
  addSearchVideoPageToken,
  addPopularVideoPageToken,
  removeSearchVideos
} = videosSlice.actions;
export default videosSlice.reducer;
