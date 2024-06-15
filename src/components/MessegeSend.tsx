interface ChatMessage {
  message: string;
  timeStamp: string;
}

interface MessegeSendProps {
  chat: ChatMessage;
}

const MessegeSend: React.FC<MessegeSendProps> = ({ chat }) => {
  return (
    <div className=" w-fit max-w-[60%] p-3 py-2 my-1 rounded-3xl ml-auto bg-[#DCF7C5]">
      <p>{chat.message}</p>
      <span className="text-xs text-gray-500">{chat.timeStamp}</span>
    </div>
  );
};

export default MessegeSend;
