import React from 'react'

const VideoDescription = ({videoData}) => {
    const { snippet } = videoData;
    const { localized} = snippet;
  return (
    <div className='bg-gray-200 p-4 rounded-lg'>
       {localized.description} 
    </div>
  )
}

export default VideoDescription;