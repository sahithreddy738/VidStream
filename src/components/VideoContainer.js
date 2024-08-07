import React from "react";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";
import useVideos from "../hooks/useVideos";

const VideoContainer = () => {
  const popularVideos = useSelector((store) => store.videos.popularVideos);
  useVideos();
  if (popularVideos.length === 0) return <Shimmer />;
  return (
    <div className="flex flex-wrap w-full py-4">
      {popularVideos.map((popularVideo) => (
        <VideoCard key={popularVideo.id} videoData={popularVideo} />
      ))}
    </div>
  );
};

export default VideoContainer;
