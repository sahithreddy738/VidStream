import React from 'react'
import { NAV_COMPONENT_ITEMS } from '../utils/constants';

const NavComponent = () => {
    console.log("navcomponent");
  return (
    <div className='flex flex-col space-y-4 w-[10%] items-center  mt-2'>
        {
            NAV_COMPONENT_ITEMS.map((nav,ind)=>(
                <div key={ind} className='flex flex-col space-y-4'>
                    <img alt="nav-icon" className='w-[90%] h-6 object-contain' src={nav.imageSrc}>
                    </img>
                    <span className='text-sm font-medium'>{nav.itemName}</span>    
                </div>
            ))
        }
    </div>
  )
}

export default NavComponent;