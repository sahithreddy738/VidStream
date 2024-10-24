import React from "react";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { toggleReplies } from "../utils/slices/watchSlice";

const CommentList = ({ commentData,videoData }) => {
  const dispatch = useDispatch();
  const showReplies = useSelector((store) => store.watch.showReplies);
  const {statistics}=videoData;
  const {commentCount}=statistics;
  return (
    <div className="w-full flex flex-col justify-start space-y-6 bg-gray-100 p-4 rounded-lg">
      <h1 className="text-2xl font-semibold">{"("+commentCount+")"}  Comments</h1>
      <div className="w-[full] flex flex-col space-y-6">
        {commentData?.map((comment) => (
          <div>
            <Comment
              key={comment.id}
              comment={comment?.snippet?.topLevelComment}
            />
            {comment.replies && comment.replies ? (
              <div className="ml-16 sm:ml-24 mt-2 flex flex-col space-y-4">
                <span
                  className="text-blue-400 font-semibold cursor-pointer text-xl"
                  onClick={() => dispatch(toggleReplies())}
                >
                  {showReplies
                    ? comment.replies.comments.length + " replies ⬆️"
                    : comment.replies.comments.length + " replies ⬇️"}
                </span>
                {showReplies ? (
                  comment.replies.comments.map((c) => (
                    <Comment key={c.id} comment={c} />
                  ))
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
