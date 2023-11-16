import User from "@/components/UI/Icons/User";

const ProfileUser: React.FC = () => {
  return (
    <div className="flex absolute right-0 mt-7">
      <div className=" right-0 text-center  items-center text-sm mt-2">
        <p className="text-white font-semibold">Nome Cognome</p>
        <a href="/login" className="text-green-cdl font-semibold">
          LOGOUT
        </a>
      </div>
      <User className="w-16 h-16 ali" />
    </div>
  );
};

export default ProfileUser;
