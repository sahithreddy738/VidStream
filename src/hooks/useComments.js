import { useEffect } from "react"
import { YOUTUBE_COMMENTS_URL1, YOUTUBE_COMMENTS_URL2 } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addComments } from "../utils/slices/watchSlice";


const useComments=(videoId)=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        fetchComments();
    },[videoId]);
    const fetchComments=async() =>{
      const res=await fetch(YOUTUBE_COMMENTS_URL1+videoId+YOUTUBE_COMMENTS_URL2);
      const jsonData=await res.json();
      console.log(jsonData);
      dispatch(addComments(jsonData.items));
    }
}

export default useComments;