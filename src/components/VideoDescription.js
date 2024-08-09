import React from 'react'

const VideoDescription = ({videoData}) => {
    const { snippet,statistics } = videoData;
    const { localized} = snippet;
    const {viewCount}=statistics
  return (
    <div className='bg-gray-200 p-4 rounded-lg flex flex-col space-y-6'>
      <span className='text-xl font-semibold'>{(viewCount / 1000000).toFixed(1) + "M Views"}</span>
       {localized.description} 
    </div>
  )
}

export default VideoDescription;