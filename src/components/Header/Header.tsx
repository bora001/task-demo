"use client";
import { useUserStore } from "@/providers/UserProvider";
import { ExitIcon, PersonIcon } from "@radix-ui/react-icons";

const Header = ({ title }: { title: string }) => {
  const { userName, userRole, resetUser } = useUserStore((state) => state);
  const onLogout = () => resetUser();
  return (
    <div className="flex justify-between h-[100px]">
      <h2 className="font-bold text-xl">{title}</h2>
      <div className="flex gap-2 h-fit items-center">
        <div className="flex gap-2">
          <p>{userName}</p>
          <p className="text-blue-500">{userRole}</p>
        </div>
        <PersonIcon />
        <ExitIcon className="cursor-pointer" onClick={onLogout} />
      </div>
    </div>
  );
};

export default Header;
