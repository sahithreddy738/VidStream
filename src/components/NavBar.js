import React from "react";
import NavList from "./NavList";
import {
  END_NAVLIST,
  EXPLORE_NAVLIST,
  HOME_NAVLIST,
  MORE_NAVLIST,
  YOUR_NAVLIST,
} from "../utils/constants";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-col space-y-4 ">
        <div>
          <NavList navItems={HOME_NAVLIST} heading="" />
          <span className="border-b-4  border-gray-300"></span>
        </div>
        <div>
          <NavList navItems={YOUR_NAVLIST} heading="You" />
        </div>
        <div>
          <NavList navItems={EXPLORE_NAVLIST} heading="Explore" />
        </div>
        <div>
          <NavList navItems={MORE_NAVLIST} heading="More from Youtube" />
        </div>
        <div>
          <NavList navItems={END_NAVLIST} heading="" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
