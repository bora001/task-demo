"use client";
import React from "react";
import {
  CaretLeftIcon,
  CheckboxIcon,
  ViewGridIcon,
} from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const MENU_LIST = [
  { title: "Users", href: "/users", icon: <ViewGridIcon /> },
  { title: "Tasks", href: "/tasks", icon: <CheckboxIcon /> },
];

const Side = () => {
  const path = usePathname();

  return (
    <div className="bg-teal-700 w-[250px] h-screen p-3 flex flex-col text-white relative">
      <div className="absolute bg-teal-900 p-1 rounded-full right-[-10px] top-[50px]">
        <CaretLeftIcon />
      </div>
      <div className="mt-[80px] flex flex-col gap-1">
        {MENU_LIST.map(({ title, href, icon }) => (
          <Link
            href={href}
            key={title}
            className={`${MENU_STYLE} ${
              path.includes(title.toLowerCase()) && ACTIVE_STYLE
            }`}
          >
            {icon}
            <p>{title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Side;

const MENU_STYLE =
  "flex items-center gap-2 cursor-pointer hover:bg-teal-900 p-2 rounded-md";

const ACTIVE_STYLE = "bg-teal-900";
