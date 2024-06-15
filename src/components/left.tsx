import { useState } from "react";
import { useChat } from "../provider/ChatProvider";
import UserSlice from "./UserSlice";

function Left() {
  const { users, setUsers } = useChat();
  const [openModalUserId, setOpenModalUserId] = useState(null);

  const handleModalToggle = (userId: any) => {
    setOpenModalUserId((prevUserId) => (prevUserId === userId ? null : userId));
  };

  return (
    <div>
      {users.map((user) => (
        <UserSlice
          key={user.userId}
          user={user}
          openModalUserId={openModalUserId}
          onToggleModal={handleModalToggle}
          setUsers={setUsers}
        />
      ))}
    </div>
  );
}

export default Left;
