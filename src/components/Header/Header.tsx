"use client";
import { useUserStore } from "@/providers/UserProvider";
import { PersonIcon } from "@radix-ui/react-icons";

const Header = ({ title }: { title: string }) => {
  const { userName, userRole } = useUserStore((state) => state);

  return (
    <div className="flex justify-between h-[100px]">
      <h2 className="font-bold text-xl">{title}</h2>
      <div className="flex gap-2">
        <div className="flex gap-2">
          <p>{userName}</p>
          <p className="text-blue-500">{userRole}</p>
        </div>
        <PersonIcon />
      </div>
    </div>
  );
};

export default Header;
