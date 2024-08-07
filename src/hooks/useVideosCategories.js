import { useEffect, useRef } from "react";
import { YOUTUBE_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideoCategories } from "../utils/slices/videosSlice";

const useVideosCategories = () => {
 const dispatch=useDispatch();
 const initialized = useRef(false); 

 useEffect(() => {
   if (!initialized.current) {
    window.scrollTo(0,0);
     fetchVideoCategories();
     initialized.current = true;
   }
 }, []);
  const fetchVideoCategories = async () => {
    const res = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" +
        YOUTUBE_KEY
    );
    const jsonData = await res.json();
     dispatch(addVideoCategories(jsonData.items));
  };
};

export default useVideosCategories;
