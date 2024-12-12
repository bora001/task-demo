"use client";
import { useUserStore } from "@/providers/UserProvider";
import { PersonIcon } from "@radix-ui/react-icons";
import React from "react";

const Header = ({ title }: { title: string }) => {
  const { userName, userRole } = useUserStore((state) => state);
  console.log("userName, userRole", userName, userRole);

  return (
    <div className="flex justify-between">
      <h2 className="font-bold text-xl">{title}</h2>

      <div className="flex items-center gap-2">
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
