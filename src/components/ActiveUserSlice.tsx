import { Link } from "react-router-dom";
import ArrowLeft from "../assets/Arrowleft.png";
import threedot from "../assets/Icon.png";
import VedioIcon from "../assets/Shape.png";
export interface UserSliceProps {
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
}
function UserSlice({ user }: UserSliceProps) {
  return (
    <div className=" mx-auto w-11/12 h-16 m-auto flex items-center bg-[#F6F6F6] p-5 pl-2  transition-all rounded-md mt-5">
      <Link to={"/"}>
        {" "}
        <img className="w-5 h-5 mr-3 " src={ArrowLeft} alt="" />{" "}
      </Link>
      <div className="w-12 h-12 rounded-full overflow-hidden relative ">
        <img
          className="w-full h-full object-cover"
          src={user.profilePictureURL}
          alt=""
        />
      </div>

      <div className="ml-4  w-2/6">
        <div className="flex items-center">
          <h2 className="font-bold ">{user.name}</h2>{" "}
          <div className="bg-[#3BA55D] w-[8px] h-[8px] ml-3 rounded-full"></div>
        </div>

        <p className="text-sm truncate">Click here to the contact info...</p>
      </div>

      <div className="flex ml-auto gap-6 mr-3">
        <img src={VedioIcon} alt="" />

        <img src={threedot} alt="" />
      </div>
    </div>
  );
}

export default UserSlice;
