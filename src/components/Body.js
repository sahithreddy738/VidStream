import React from 'react'
import NavBar from './NavBar';
import MainContainer from './MainContainer';


const Body = () => {

  return (
    <div className='flex flex-row w-[100%] space-x-4'>
        <NavBar className="w-[20%]"/>
        <MainContainer className="w-[80%]"/>
    </div>
  )
}

export default Body;