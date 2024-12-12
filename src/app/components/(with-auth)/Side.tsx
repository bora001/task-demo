import React from "react";
import {
  CaretLeftIcon,
  CheckboxIcon,
  ViewGridIcon,
} from "@radix-ui/react-icons";

const Side = () => {
  return (
    <div className="bg-teal-700 w-[250px] h-screen p-3 flex flex-col text-white relative">
      <div className="absolute bg-teal-900 p-1 rounded-full right-[-10px] top-[50px]">
        <CaretLeftIcon />
      </div>
      <div className="mt-[80px]">
        <div className={`${MENU_STYLE} `}>
          <ViewGridIcon />
          <p>Users</p>
        </div>
        <div className={MENU_STYLE}>
          <CheckboxIcon />
          <p>Tasks</p>
        </div>
      </div>
    </div>
  );
};

export default Side;

const MENU_STYLE =
  "flex items-center gap-2 cursor-pointer hover:bg-teal-900 p-2 rounded-md";
