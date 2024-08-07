import React from 'react'
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
// import useVideos from '../hooks/useVideos';


const Body = () => {
  return (
    <div className='flex flex-row w-[100%] space-x-4'>
        <NavBar className="w-[20%]"/>
        <Outlet className="w-[80%]"/>
    </div>
  )
}

export default Body;