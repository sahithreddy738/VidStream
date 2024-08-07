import { formatDistanceToNow } from "date-fns";
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchVideoCard = ({ searchData }) => {
  const { snippet,id } = searchData;
  const { title, description, thumbnails, channelTitle, publishedAt } = snippet;
  const navigate=useNavigate();
  const handleSearchClick=() => {
    (id.videoId)? navigate("/watch?v="+id?.videoId):navigate("/watch?v="+id?.playlistId+"&start_radio=1");
  }
  return (
    <div className="flex flex-row  w-[100%] space-x-4 " onClick={handleSearchClick}>
      <img
        alt="search-image"
        src={thumbnails.high.url}
        className="rounded-lg w-[40%] h-[350px] object-cover cursor-pointer"
      ></img>
      <div className="flex flex-col space-y-4 w-[60%]">
        <div>
          <h1 className="font-semibold text-xl">{title}</h1>
          <span className="">
            {formatDistanceToNow(new Date(publishedAt), { addSuffix: true })}
          </span>
        </div>
        <span className="font-semibold">{channelTitle}</span>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default SearchVideoCard;
