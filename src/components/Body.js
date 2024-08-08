import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import useVideos from "../hooks/useVideos";
import { useSelector } from "react-redux";

const Body = () => {
  const toggleNav = useSelector((store) => store.appConfig.toggleNav);
  useVideos();
  return (
    <div className="flex flex-row  w-full h-full">
      {toggleNav ? (
        <>
          <div className="w-[16%] h-full overflow-y-scroll hide-scrollbar fixed top-12 left-3">
            <NavBar />
          </div>
          <div className="w-[80%] ml-[20%]">
            <Outlet />
          </div>
        </>
      ) : (
        <>
          <div className="w-[100%] ml-[2%]">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
