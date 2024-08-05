import React from "react";
import useSearchVideos from "../hooks/useSearchVideos";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import SearchVideoCard from "./SearchVideoCard";

const SearchPage = () => {
  const searchVideos = useSelector((store) => store.videos.searchVideos);
  useSearchVideos();
  if (searchVideos.length === 0) return <Shimmer />;
  return (
    <div className="w-[full] flex flex-col space-y-3 items-start">
      {searchVideos?.map((video) => (
        <SearchVideoCard key={video.id.videoId} searchData={video} />
      ))}
    </div>
  );
};

export default SearchPage;
