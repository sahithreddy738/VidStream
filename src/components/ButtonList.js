import React from "react";
import useVideosCategories from "../hooks/useVideosCategories";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const ButtonList = () => {
  const videoCategories = useSelector((store) => store.videos.videoCategories);
  useVideosCategories();
  if (videoCategories?.length === 0) return <Shimmer />;
  return (
    <div className="flex space-x-2 overflow-x-scroll hide-scrollbar">
      {videoCategories?.map((videoCategory) => (
          <button key={videoCategory.id} className="bg-gray-200  px-4 py-2 rounded-lg whitespace-nowrap">
             <span>{videoCategory.snippet.title}</span>
          </button>
      ))}
    </div>
  );
};

export default ButtonList;
