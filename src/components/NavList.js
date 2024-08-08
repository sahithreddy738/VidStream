import React from "react";
import NavItem from "./NavItem";

const NavList = ({ navItems, heading }) => {
  return (
    <div className="flex flex-col spcae-y-2 justify-start border-b-2 border-gray-300">
      <h1 className="text-xl font-medium ml-5 mb-4">{heading}</h1>
      <div className="mb-4">
        {navItems.map((item) => (
          <NavItem
            key={item.itemName}
            navImg={item.imageSrc}
            navItemName={item.itemName}
          />
        ))}
      </div>
    </div>
  );
};

export default NavList;
