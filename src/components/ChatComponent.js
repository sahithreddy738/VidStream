import React from 'react'

const ChatComponent = ({userName,userMessage}) => {
  return (
    <div className='flex flex-row space-x-4 p-2 items-center'>
         <img alt="user-img" src="user.png" className="w-8" />
        <span className='text-lg font-semibold'>{userName}</span>
        <span className='text-base font-normal'>{userMessage}</span>
    </div>
  )
}

export default ChatComponent;