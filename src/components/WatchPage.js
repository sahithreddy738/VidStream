import React from 'react'
import WatchVideo from './WatchVideo';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Shimmer from './Shimmer';
import VideoDescription from './VideoDescription';

const WatchPage = () => {
    const [searchParams]=useSearchParams();
    const popularVideos = useSelector((store) => store.videos.popularVideos);
    if (popularVideos.length === 0) return <Shimmer />;
    const videoInfo=popularVideos.filter((video)=>video.id===searchParams.get("v"));
  return (
    <div className='w-[60%] space-y-2'>
        <WatchVideo videoData={videoInfo[0]}/>
        <VideoDescription videoData={videoInfo[0]}/>
    </div>
  )
}

export default WatchPage;