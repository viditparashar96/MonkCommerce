import { useNavigate } from "react-router-dom";
import userData from "../data";
import { useChat } from "../provider/ChatProvider";
import { User } from "../types";

const ActionModal = ({ handleCickCancel, setUsers, userId }: any) => {
  const { users } = useChat();
  const navigation = useNavigate();
  const currentUserUnreadMessage: number | undefined = userData?.find(
    (u) => u.userId === userId
  )?.unreadCount;
  const handleDelete = () => {
    setUsers((prevUsers: User[]) => {
      return prevUsers.filter((user) => user.userId !== userId);
    });
    navigation("/");
  };

  const handleMarkAsUnread = () => {
    const newUsers = users.map((user: any) => {
      if (user.userId === userId) {
        return {
          ...user,
          unreadCount: currentUserUnreadMessage,
        };
      }
      return user;
    });
    setUsers(newUsers);
  };

  return (
    <div className=" absolute min-w-[160px]  bg-white rounded-lg shadow-md  right-5 top-[80%] z-50 ">
      <ul>
        <button
          className="p-2 hover:bg-gray-200 transition-all w-full text-left"
          onClick={handleMarkAsUnread}
        >
          Mark as unread
        </button>
        <button
          className="p-2 hover:bg-gray-200 transition-all w-full text-left"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="p-2 hover:bg-gray-200 transition-all w-full text-left"
          onClick={handleCickCancel}
        >
          Cancel
        </button>
      </ul>
    </div>
  );
};

export default ActionModal;
