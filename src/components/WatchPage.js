import React from "react";
import WatchVideo from "./WatchVideo";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoDescription from "./VideoDescription";
import useComments from "../hooks/useComments";
import useVideoById from "../hooks/useVideoById";
import CommentList from "./CommentList";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const comments = useSelector((store) => store.watch.comments);
  const videoInfo = useSelector((store) => store.watch.videoInfo);
  useComments(videoId);
  useVideoById(videoId);
  return (
    videoInfo?.length > 0 && (
      <div className="flex flex-row space-x-6">
        <div className="w-[60%] space-y-2">
          <WatchVideo videoData={videoInfo[0]} />
          <VideoDescription videoData={videoInfo[0]} />
          <CommentList commentData={comments} videoData={videoInfo[0]}/>
        </div>
        <div className="w-[30%]">
          <LiveChat />
          
        </div>
      </div>
    )
  );
};

export default WatchPage;
