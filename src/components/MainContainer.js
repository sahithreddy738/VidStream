import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className='w-full overflow-x-scroll hide-scrollbar'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer;