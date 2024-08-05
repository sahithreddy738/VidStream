import React, { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTIONS_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSuggestionsCache } from "../utils/slices/searchSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggetions] = useState(false);
  const cacheResults = useSelector((store) => store.cache);
  const dispatch = useDispatch();
  const navigate=useNavigate();
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
  const handleSearchNavigation=() =>{
     navigate("/results?search_query="+searchQuery);
     setSearchQuery("");
  }
  return (
    <div className="flex w-[100%]">
      <div className="flex flex-row w-[20%] space-x-6 items-center ml-6">
        <img
          alt="menu-icon"
          src={`hamburger-icon.png`}
          className="w-8 cursor-pointer"
        ></img>
        <img
          alt="youtube-icon"
          src="Youtube-Logo.png"
          className="w-28 cursor-pointer"
        ></img>
      </div>
      <div className="w-[70%] ml-28 mt-3 relative">
        <div className="flex flex-row w-[100%] items-center">
          <input
            placeholder="Search"
            className="border w-[55%] rounded-l-3xl px-4 py-2 font-semibold"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggetions(true)}
            onBlur={() => setShowSuggetions(false)}
          />
               <button className="border rounded-r-3xl w-[8%] px-4 py-2 bg-gray-200" onClick={handleSearchNavigation}>
            Search
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute w-[55%] z-10 shadow-lg bg-white px-5 py-2">
            <ul>
              {suggestions?.map((suggestion) => (
                <li
                  key={suggestion}
                  className="mb-2 font-semibold hover:bg-gray-100 relative z-20"
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseUp={() => { setSearchQuery(suggestion)}}
                  onClick={handleSearchNavigation}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-row w-[10%] items-center justify-end mr-4">
        <img alt="user-icon" src="user.png" className="w-8" />
      </div>
    </div>
  );
};

export default Header;
