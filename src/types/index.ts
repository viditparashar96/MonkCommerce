export interface ChatMessage {
  message: string;
  timeStamp: string;
}

export interface ChatEntry {
  you?: ChatMessage;
  otherUser?: ChatMessage;
}

export interface User {
  userId: string;
  name: string;
  unreadCount: number;
  profilePictureURL: string;
  chat: ChatEntry[];
}
