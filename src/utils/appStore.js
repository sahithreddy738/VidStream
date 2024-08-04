import { configureStore } from "@reduxjs/toolkit";
import VideoReducer from "./slices/videosSlice";

const appStore=configureStore({
    reducer:{
        videos:VideoReducer
    }
});

export default appStore;