import User from "@/components/UI/Icons/User";
import { AuthStatus } from "@/store/Auth/AuthContext";
import { useAuth } from "@/store/Auth/AuthProvider";
import { useRouter } from "next/router";

const ProfileUser: React.FC = () => {
  const router = useRouter();
  const { user, logOut } = useAuth();
  const submitHandler: React.FormEventHandler = async (e) => {
    logOut();
    AuthStatus.UNAUTHENTICATED;
    router.push("/login");
  };

  return (
    <div className="flex absolute right-0 mt-7">
      <div className=" right-0 text-center  items-center text-sm mt-2">
        <p className="text-white font-semibold">{user?.getFullName()}</p>
        <button
          onClick={submitHandler}
          className="text-green-cdl font-semibold"
        >
          LOGOUT
        </button>
      </div>
      <User className="w-12 h-12" />
    </div>
  );
};

export default ProfileUser;
