import { formatDistanceToNow } from "date-fns";
import React from "react";


const Comment = ({ comment }) => {
  const { snippet } = comment;
  const {
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
    textOriginal,
  } = snippet;
  return (
    <div className="w-[full] flex flex-row space-x-2 sm:space-x-4 mb-4 sm:mb-6">
      <div className="w-[12%] sm:w-[8%] h-5 flex-shrink-0"> 
        <img
          alt="user-img"
          src={authorProfileImageUrl}
          className="border rounded-full text-center"
        ></img>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row space-x-2 items-center mb-2 sm:flex-nowrap flex-wrap">
          <h1 className="font-bold text-base">{authorDisplayName}</h1>
          <span className="font-medium text-sm">
            {formatDistanceToNow(new Date(publishedAt), { addSuffix: true })}
          </span>
        </div>
        <p className="font-medium text-lg">{textOriginal}</p>
      </div>
    </div>
  );
};

export default Comment;
