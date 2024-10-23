import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { useDispatch, useSelector } from 'react-redux';
import Shimmer from './Shimmer';
import { removeComments } from '../utils/slices/watchSlice';
import { removeSearchVideos } from '../utils/slices/videosSlice';


const MainContainer = () => {
  const dispatch=useDispatch();
  dispatch(removeComments());
  dispatch(removeSearchVideos());
  const isLoading=useSelector((store)=>store.appConfig.loading);
  return (
    <div className='w-screen sm:w-full'>
        <ButtonList />
        <VideoContainer />
        {
          isLoading && <Shimmer />
        }
    </div>
  )
}

export default MainContainer;