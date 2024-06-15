import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useChat } from "../provider/ChatProvider";
import { User } from "../types";
import ActiveUserSlice from "./ActiveUserSlice";
import MessegeReceive from "./MessegeReceive";
import MessegeSend from "./MessegeSend";
import TypingArea from "./TypingArea";

function Right() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { users, setUsers } = useChat();
  const location = useLocation();
  const { userId } = useParams<{ userId: string | undefined }>();
  const [currentUser, setCurrentUser] = useState(
    users.find((user: User) => user.userId === userId)
  );
  const handleUserCount = (userId: string) => {
    const newUsers = users.map((user) => {
      if (user.userId === userId) {
        return {
          ...user,
          unreadCount: 0,
        };
      }
      return user;
    });
    setUsers(newUsers);
  };
  useEffect(() => {
    if (userId) {
      handleUserCount(userId);
    }
  }, [currentUser, location, userId]);
  useEffect(() => {
    setCurrentUser(users.find((user: User) => user.userId === userId));
  }, [userId]);
  if (!currentUser) {
    return <p>User not found</p>;
  }
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [userId]);

  return (
    <div className="flex flex-col h-screen">
      <ActiveUserSlice user={currentUser} />
      <div
        ref={chatContainerRef}
        className="w-11/12 my-2 m-auto h-[75%] p-3 overflow-y-auto scrollbar-hide"
      >
        {currentUser.chat.map((chat: any, index: number) => (
          <div key={index}>
            {chat.you && <MessegeSend chat={chat.you} />}
            {chat.otherUser && <MessegeReceive chat={chat.otherUser} />}
          </div>
        ))}
      </div>
      <TypingArea />
    </div>
  );
}

export default Right;
