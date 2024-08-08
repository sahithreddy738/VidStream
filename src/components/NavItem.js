import React from 'react'

const NavItem = ({navImg,navItemName}) => {
  return (
    <div className='flex flex-row p-2 ml-3 space-x-2 items-center hover:bg-gray-300 rounded-xl'>
       <div className='w-[20%]'>
           <img alt="nav-icon" src={navImg} className='w-[65%] h-6 object-contain mix-blend-color-burn'/>
       </div>
       <h1 className='text-lg font-sans'>{navItemName}</h1>
    </div>
  )
}

export default NavItem;