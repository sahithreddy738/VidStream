import { useEffect, useRef, useState } from "react";
import {
  YOUTUBE_COMMENTS_URL1,
  YOUTUBE_COMMENTS_URL2,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addCommentPageToken, addComments } from "../utils/slices/watchSlice";

const useComments = (videoId) => {
  const [pageToken, setPageToken] = useState("");
  const commentPageToken = useSelector((store) => store.watch.commentPageToken);
  const dispatch = useDispatch();
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      fetchComments();
      initialized.current = true;
    }
  }, [videoId]);
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight } = document.documentElement;
      if (scrollTop + window.innerHeight >= scrollHeight - 10) {
        setPageToken(commentPageToken?.nextPageToken || "");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", () => {});
  }, [commentPageToken]);

  useEffect(() => {
    if (pageToken) fetchComments();
  }, [pageToken]);

  const fetchComments = async () => {
    const res = await fetch(
      YOUTUBE_COMMENTS_URL1 +
        videoId +
        "&pageToken=" +
        pageToken +
        YOUTUBE_COMMENTS_URL2
    );
    const jsonData = await res.json();
    console.log(jsonData);
    dispatch(addComments(jsonData.items));
    dispatch(
      addCommentPageToken({
        nextPageToken: jsonData.nextPageToken,
        pageInfo: jsonData.pageInfo,
      })
    );
  };
};

export default useComments;
