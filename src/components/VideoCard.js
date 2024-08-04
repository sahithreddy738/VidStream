import { formatDistanceToNow } from "date-fns";
import React from "react";

const VideoCard = ({ videoData }) => {
  const { contentDetails, snippet, statistics } = videoData;
  const { duration } = contentDetails;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="flex flex-col space-y-2 mr-2 w-[30%] mb-2">
      <div className="w-full relative" style={{ paddingBottom: '56.25%' }}>
        <img
          alt="video-thumbnail"
          src={thumbnails.standard.url}
          className="absolute top-0 left-0 w-full h-full rounded-3xl object-cover"
        />
      </div>
      <div className="">
        <h1 className="font-semibold text-lg">{title}</h1>
        <h3>{channelTitle}</h3>
        <div className="flex flex-row space-x-2">
          <h3>{(viewCount / 1000000).toFixed(1) + "M"} views |</h3>
          <h3>{formatDistanceToNow(new Date(publishedAt),{addSuffix:true})}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
