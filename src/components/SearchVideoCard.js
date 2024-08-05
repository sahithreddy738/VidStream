import { formatDistanceToNow } from "date-fns";
import React from "react";

const SearchVideoCard = ({ searchData }) => {
  const { snippet } = searchData;
  const { title, description, thumbnails, channelTitle, publishedAt } = snippet;
  return (
    <div className="flex flex-row  w-[100%] space-x-4">
      <img alt="search-image" src={thumbnails.high.url} className="rounded-lg w-[40%] h-[350px] object-cover"></img>
      <div className="flex flex-col space-y-4 w-[60%]">
        <div>
          <h1 className="font-semibold text-xl">{title}</h1>
          <span className="">{formatDistanceToNow(new Date(publishedAt),{addSuffix:true})}</span>
        </div>
        <span className="font-semibold">{channelTitle}</span>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default SearchVideoCard;
