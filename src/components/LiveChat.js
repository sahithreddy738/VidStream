import React, { useEffect, useRef } from "react";
import ChatComponent from "./ChatComponent";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessages } from "../utils/slices/appConfigSlice";
import { generateRandomeName, makeRandomString } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const inputRef=useRef(null);
  const chatMessages = useSelector((store) => store.appConfig.chatMessages);
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchMessages();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const fetchMessages = () => {
    dispatch(
      addChatMessages({
        userName: generateRandomeName(),
        userMessage: makeRandomString(15),
      })
    );
  };
  return (
    <div className="hidden sm:inline-block shadow-md rounded-lg">
      <div className="w-full  h-[450px]  border-b-2 border-gray-100 flex flex-col-reverse overflow-y-auto">
        {chatMessages?.map((message) => (
          <ChatComponent
            userName={message.userName}
            userMessage={message.userMessage}
          />
        ))}
      </div>
      <div className="w-full p-2 flex flex-row space-x-2 items-center ">
        <input
          className="w-[80%] rounded-xl border-gray-100  p-4 hover:border-none"
          placeholder="Enter message"
          ref={inputRef}
        />
        <button className="w-[20%] rounded-lg bg-blue-400 px-2 h-10" onClick={()=>{dispatch(addChatMessages({
            userName:"sahith😁😁",
            userMessage:inputRef.current.value
        }))
        inputRef.current.value=""
        }}>send</button>
      </div>
    </div>
  );
};

export default LiveChat;
