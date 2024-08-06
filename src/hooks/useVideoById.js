import { useEffect } from "react"
import { YOUTUBE_VIDEO_ID_URL1, YOUTUBE_VIDEO_ID_URL2 } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideoInfo } from "../utils/slices/watchSlice";


const useVideoById=(videoId)=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        fetchVideoById();
    },[videoId]);
    const fetchVideoById=async()=>{
        const res=await fetch(YOUTUBE_VIDEO_ID_URL1+videoId+YOUTUBE_VIDEO_ID_URL2);
        const jsonData=await res.json();
        console.log(jsonData);
        dispatch(addVideoInfo(jsonData.items));
    }
}

export default useVideoById;