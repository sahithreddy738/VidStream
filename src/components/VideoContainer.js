import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";


const VideoContainer = () => {
  const popularVideos = useSelector((store) => store.videos.popularVideos);
  return (
    <div className="flex flex-col space-y-2 w-screen sm:flex sm:flex-row sm:flex-wrap sm:w-full py-4">
      {popularVideos?.map((popularVideo) => (
        <VideoCard key={popularVideo.id} videoData={popularVideo} />
      ))}
    </div>
  );
};

export default VideoContainer;
