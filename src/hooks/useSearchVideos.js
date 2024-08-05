import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULTS_URL1, YOUTUBE_SEARCH_RESULTS_URL2 } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSearchVideos } from "../utils/slices/videosSlice";


const useSearchVideos=() => {
    const [searchParams] = useSearchParams();
    const dispatch=useDispatch();
    useEffect(() => {
       fetchSearchResultVideos()
    }, [searchParams]);
    const fetchSearchResultVideos = async () => {
      const res = await fetch(
        YOUTUBE_SEARCH_RESULTS_URL1 +
          searchParams.get("search_query") +
          YOUTUBE_SEARCH_RESULTS_URL2
      );
      const jsonData=await res.json();
      console.log(jsonData);
      dispatch(addSearchVideos(jsonData.items));
    };
}

export default useSearchVideos;