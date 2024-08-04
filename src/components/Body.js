import React from 'react'
import NavBar from './NavBar';
import MainContainer from './MainContainer';

const Body = () => {
  return (
    <div className='h-full grid-cols-2 grid-rows-1 gap-2'>
        <NavBar className="col-span-full row-start-1 row-end-3 "/>
        <MainContainer className="col-span-full"/>
    </div>
  )
}

export default Body;