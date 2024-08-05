import { useEffect } from "react";
import { YOUTUBE_KEY } from "../utils/constants";

const useWatchVideo = (videoId) => {
  useEffect(() => {
    fetchVideoById(videoId);
  }, [videoId]);
  const fetchVideoById = async (videoId) => {
    try {
      const res = await fetch(
        "'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+
          videoId+
          "&key=" +
          YOUTUBE_KEY
      );
      const jsonData = await res.json();
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
};

export default useWatchVideo;
