import { useEffect } from "react";
import { YOUTUBE_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularVideos } from "../utils/slices/videosSlice";


const useVideos = () => {
    const dispatch=useDispatch();
   useEffect(()=>{
       fetchVideos()
   },[])
   const fetchVideos=async () =>{
    const res=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="+YOUTUBE_KEY);
    const jsonData=await res.json();
    console.log(jsonData.items);
    dispatch(addPopularVideos(jsonData.items));
   }
}

export default useVideos;