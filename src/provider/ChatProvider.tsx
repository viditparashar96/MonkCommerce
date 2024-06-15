import React, { createContext, useContext, useState } from "react";
import userData from "../data";
import { User } from "../types";

interface ChatContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<any[]>>;
}

const chatContext = createContext<ChatContextType | undefined>(undefined);

const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState(userData);

  const contextValue = React.useMemo(
    () => ({ users, setUsers }),
    [users, setUsers]
  );

  return (
    <chatContext.Provider value={contextValue}>{children}</chatContext.Provider>
  );
};

export default ChatProvider;

export const useChat = () => {
  const context = useContext(chatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
