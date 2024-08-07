import { configureStore } from "@reduxjs/toolkit";
import VideoReducer from "./slices/videosSlice";
import searchReducer from "./slices/searchSlice";
import watchReducer from "./slices/watchSlice";
import appConfigReducer from "./slices/appConfigSlice";

const appStore=configureStore({
    reducer:{
        videos:VideoReducer,
        cache:searchReducer,
        watch:watchReducer,
        appConfig:appConfigReducer
    }
});

export default appStore;