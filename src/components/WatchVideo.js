import React from "react";

const WatchVideo = ({ videoData }) => {
  const { snippet } = videoData;
  const { title } = snippet;

  return (
    <div className="w-full flex flex-col space-y-4">
      <iframe
        className="rounded-lg w-[100%] h-[450px]"
        src={"https://www.youtube.com/embed/" + videoData.id + "?&autoplay=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="flex flex-row items-center justify-end space-x-2">
        <div>
          <button className="border rounded-l-2xl bg-gray-200 px-2 py-1">
            Like
          </button>
          <button className="border rounded-r-2xl bg-gray-200 px-2 py-1">
            Dislike
          </button>
        </div>
        <button className="border rounded-2xl px-2 py-2 bg-gray-200">
          Share
        </button>
        <button className="border rounded-2xl px-2 py-2 bg-gray-200">
          ...
        </button>
      </div>
    </div>
  );
};

export default WatchVideo;
