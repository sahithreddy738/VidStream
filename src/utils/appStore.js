import { configureStore } from "@reduxjs/toolkit";
import VideoReducer from "./slices/videosSlice";
import searchReducer from "./slices/searchSlice";
import watchReducer from "./slices/watchSlice";

const appStore=configureStore({
    reducer:{
        videos:VideoReducer,
        cache:searchReducer,
        watch:watchReducer,
    }
});

export default appStore;