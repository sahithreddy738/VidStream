import React from 'react';

const Header = () => {
  return (
    <div className='flex w-full'>
        <div className='flex flex-row w-[20%] space-x-6 items-center ml-6'>
            <img alt="menu-icon" src={`hamburger-icon.png`} className='w-8 cursor-pointer'></img>
            <img alt="youtube-icon" src="Youtube-Logo.png" className='w-28 cursor-pointer'></img>
        </div>
        <div className='flex flex-row w-[70%] ml-28 items-center'>
            <input placeholder='Search' className='border w-[55%] rounded-l-3xl px-4 py-2'/>
            <button className='border rounded-r-3xl w-[8%] px-4 py-2 bg-gray-200'>
                 Search
            </button>
        </div>
        <div className='flex flex-row w-[10%] items-center justify-end mr-4'>
            <img  alt="user-icon" src="user.png" className='w-8'/>
        </div>
    </div>
  )
}

export default Header;