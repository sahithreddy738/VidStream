import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  YOUTUBE_SEARCH_RESULTS_URL1,
  YOUTUBE_SEARCH_RESULTS_URL2,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addSearchVideoPageToken,
  addSearchVideos,
} from "../utils/slices/videosSlice";

const useSearchVideos = () => {
  const [pageToken,setPageToken]=useState("");
  const [searchParams] = useSearchParams();
  const searchVideoPageToken = useSelector(
    (store) => store.videos.searchVideoPageToken
  );
  const dispatch = useDispatch();
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      fetchSearchResultVideos();
      initialized.current = true;
    }
  }, [searchParams]);
  useEffect(() => {
    const handleScroll=() =>{
      const {scrollHeight,scrollTop}=document.documentElement;
      if(scrollTop+window.innerHeight>=scrollHeight-10) {
         setPageToken(searchVideoPageToken?.nextPageToken||"");
      }
    }
    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",()=>{});
  },[searchVideoPageToken])
  useEffect(() => {
    if (pageToken) {
      fetchSearchResultVideos();
    }
  }, [pageToken]);


  const fetchSearchResultVideos = async () => {
    const res = await fetch(
      YOUTUBE_SEARCH_RESULTS_URL1 +
        searchParams.get("search_query") +
        "&pageToken=" +
        pageToken +
        YOUTUBE_SEARCH_RESULTS_URL2
    );
    const jsonData = await res.json();
    dispatch(addSearchVideos(jsonData.items));
    dispatch(
      addSearchVideoPageToken({
        nextPageToken: jsonData.nextPageToken,
        pageInfo: jsonData.pageInfo,
      })
    );
  };
};

export default useSearchVideos;
