import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import useVideos from "../hooks/useVideos";
import { useSelector } from "react-redux";

const Body = () => {
  const toggleNav = useSelector((store) => store.appConfig.toggleNav);
  useVideos();
  return (
    <div className="flex flex-row w-screen  sm:w-full sm:h-full">
      {toggleNav ? (
        <>
          <div className="w-[16%] h-full overflow-y-scroll hide-scrollbar fixed top-12 left-3">
            <NavBar />
          </div>
          <div className="w-screen ml-2 sm:w-[80%] sm:ml-[20%]">
            <Outlet />
          </div>
        </>
      ) : (
        <>
          <div className="w-screen sm:w-[100%] sm:ml-[2%]">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
