import { useEffect } from "react";
import { Link } from "react-router-dom";
import threedot from "../assets/Icon.png";
import { User } from "../types";
import ActionModal from "./ActionModal";

interface UserSliceProps {
  user: {
    userId: string;
    name: string;
    unreadCount: number;
    profilePictureURL: string;
    chat: {
      you?: {
        message: string;
        timeStamp: string;
      };
      otherUser?: {
        message: string;
        timeStamp: string;
      };
    }[];
  };
  openModalUserId: string | null;
  onToggleModal: (userId: string | null) => void;
  setUsers: (users: User[]) => void;
}

function UserSlice({
  user,
  openModalUserId,
  onToggleModal,
  setUsers,
}: UserSliceProps) {
  const isModalOpen = openModalUserId === user.userId;

  const handleCickCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onToggleModal(null);
  };
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isModalOpen && !(e.target as HTMLElement).closest(".user-slice")) {
        onToggleModal(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isModalOpen, onToggleModal]);

  const handleClickModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    onToggleModal(user.userId);
  };
  const lastChat = user.chat[user.chat.length - 1];
  const lastMessage = lastChat?.you?.message ?? "No messages yet";
  return (
    <div className="user-slice w-full  relative">
      <Link
        to={`/chat/${user.userId}`}
        className="max-w-[360px] h-16 m-auto flex items-center hover:bg-gray-200 p-2 mt-2 transition-all rounded-sm"
      >
        <div className="w-12 h-12 rounded-full bg-amber-700 overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={user.profilePictureURL}
            alt="userimage"
          />
        </div>
        <div className="ml-3 w-4/6">
          <h2 className="font-bold">{user.name}</h2>
          <div>
            <p className="text-sm truncate">{lastMessage}</p>
          </div>
        </div>
        {user.unreadCount > 0 && (
          <div className="bg-[#3BA55D] text-white  w-[20px] h-[20px] flex items-center justify-center mt-6 text-xs  rounded-[100%]">
            {user.unreadCount}
          </div>
        )}

        <button className="flex ml-auto mr-2 p-2" onClick={handleClickModal}>
          <img src={threedot} alt="More options" />
        </button>
      </Link>
      {isModalOpen && (
        <ActionModal
          handleCickCancel={handleCickCancel}
          setUsers={setUsers}
          userId={user.userId}
        />
      )}
    </div>
  );
}

export default UserSlice;
