import { configureStore } from "@reduxjs/toolkit";
import VideoReducer from "./slices/videosSlice";
import searchReducer from "./slices/searchSlice";

const appStore=configureStore({
    reducer:{
        videos:VideoReducer,
        cache:searchReducer
    }
});

export default appStore;