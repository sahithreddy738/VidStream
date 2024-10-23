import React, { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTIONS_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSuggestionsCache } from "../utils/slices/searchSlice";
import { useNavigate } from "react-router-dom";
import { removeSearchVideos } from "../utils/slices/videosSlice";
import { toggleNavBar } from "../utils/slices/appConfigSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggetions] = useState(false);
  const cacheResults = useSelector((store) => store.cache);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!cacheResults[searchQuery]) fetchSearchSuggestions();
      else setSuggestions(cacheResults[searchQuery]);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);
  const fetchSearchSuggestions = async () => {
    const res = await fetch(YOUTUBE_SUGGESTIONS_URL + searchQuery);
    const jsonData = await res.json();
    setSuggestions(jsonData[1]);
    dispatch(addSuggestionsCache({ [jsonData[0]]: jsonData[1] }));
  };
  const handleSearchNavigation = () => {
    dispatch(removeSearchVideos());
    navigate("/results?search_query=" + searchQuery);
    setSearchQuery("");
  };
  return (
    <div className="flex w-screen sm:w-[100%]">
      <div className="flex flex-row w-[20%] mt-2 sm:mt-0 space-x-2 sm:space-x-6 items-center ml-0 sm:ml-6 fixed">
        <img
          alt="menu-icon"
          src={`hamburger-icon.png`}
          className="w-8 cursor-pointer hidden sm:inline-block"
          onClick={()=>dispatch(toggleNavBar())}
        ></img>
        <img
          alt="youtube-icon"
          src={`Youtube-Logo.png`}
          className="w-28 cursor-pointer"
          onClick={()=>navigate("/")}
        ></img>
      </div>
      <div className=" w-[80%] ml-[25%] sm:ml-[35%] mt-3 mb-3 relative">
        <div className="flex flex-row w-[100%] items-center">
          <input
            placeholder="Search"
            className="border w-[55%] rounded-l-3xl px-4 py-2 font-semibold"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggetions(true)}
            onBlur={() => setShowSuggetions(false)}
          />
          <button
            className="border rounded-r-3xl sm:rounded-r-3xl w-[35%] sm:w-[10%] px-4 py-2 bg-gray-200"
            onClick={handleSearchNavigation}
          >
            Search
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute w-[90%] sm:w-[55%] z-10 shadow-lg bg-white px-5 py-2">
            <ul>
              {suggestions?.map((suggestion) => (
                <li
                  key={suggestion}
                  className="mb-2 font-semibold hover:bg-gray-100 relative z-20"
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseUp={() => {
                    setSearchQuery(suggestion);
                  }}
                  onClick={handleSearchNavigation}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-row w-[15%] sm:w-[10%] items-center justify-end mr-6 sm:mr-4">
        <img alt="user-icon" src="user.png" className="w-8" />
      </div>
    </div>
  );
};

export default Header;
