import React from "react";

interface ChatMessage {
  message: string;
  timeStamp: string;
}

interface MessegeReceiveProps {
  chat: ChatMessage;
}

const MessegeReceive: React.FC<MessegeReceiveProps> = ({ chat }) => {
  return (
    <div className="w-fit max-w-lg p-3 py-2 mt-2 rounded-3xl mr-auto bg-[#FAFAFA]">
      <p>{chat.message}</p>
      <span className="text-xs text-gray-500">{chat.timeStamp}</span>
    </div>
  );
};

export default MessegeReceive;
