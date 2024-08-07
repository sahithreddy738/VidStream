import { useEffect, useRef, useState } from "react";
import { YOUTUBE_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addPopularVideoPageToken,
  addPopularVideos,
} from "../utils/slices/videosSlice";
import { toggleLoading } from "../utils/slices/appConfigSlice";

const useVideos = () => {
  const [pageToken, setPageToken] = useState("");
  const dispatch = useDispatch();
  const popularVideoPageToken = useSelector(
    (store) => store.videos.popularVideoPageToken
  );
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      fetchVideos();
      initialized.current = true;
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, scrollTop } = document.documentElement;
      if (scrollTop + window.innerHeight >= scrollHeight - 20) {
        setPageToken(popularVideoPageToken?.nextPageToken || "");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [popularVideoPageToken]);

  useEffect(() => {
    if (pageToken) {
      fetchVideos();
    }
  }, [pageToken]);


  const fetchVideos = async () => {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=10&pageToken=${pageToken}&key=` +
        YOUTUBE_KEY
    );
    const jsonData = await res.json();
    dispatch(addPopularVideos(jsonData.items));
    dispatch(
      addPopularVideoPageToken({
        nextPageToken: jsonData.nextPageToken,
        pageInfo: jsonData.pageInfo,
      })
    );
    dispatch(toggleLoading(false));
  };
};

export default useVideos;
