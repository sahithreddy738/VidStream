import { formatDistanceToNow } from "date-fns";
import React from "react";

const WatchVideo = ({ videoData }) => {
  const { snippet, statistics } = videoData;
  const { title, channelTitle, publishedAt } = snippet;
  const { likeCount } = statistics;
  return (
    <div className="w-full flex flex-col space-y-2 mb-8">
      <iframe
        className="rounded-lg w-[100%] h-[300px] sm:h-[450px]"
        src={"https://www.youtube.com/embed/" + videoData.id + "?&autoplay=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h1 className="font-bold text-2xl mb-4 sm:mb-0">{title}</h1>
      <div className="flex flex-row items-start sm:items-center space-x-4 w-full">
        <div className="flex flex-col items-start space-y-2 sm:flex-row sm:space-x-2 w-[50%] sm:items-center ">
          <span className="font-semibold text-xl">{channelTitle}</span>
          <button className="bg-blue-400 px-4 py-2 rounded-2xl">
            Subscribe
          </button>
          <span className="font-medium text-base">
            {formatDistanceToNow(new Date(publishedAt), { addSuffix: true })}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] sm:items-center sm:justify-end sm:space-x-4 space-y-4 font-semibold">
          <div>
            <button className="rounded-full sm:rounded-l-2xl bg-blue-400 px-4 py-2 border-r-2 border-black">
              {(likeCount / 1000000).toFixed(1) + "M"} 👍
            </button>
            <button className="rounded-full sm:rounded-r-2xl bg-blue-400 px-4 py-2">
              1k👎
            </button>
          </div>
          <button className="rounded-2xl px-4 py-2 bg-blue-400">
            Share
          </button>
          <button className="rounded-2xl px-4 py-2 bg-blue-400">
            ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
