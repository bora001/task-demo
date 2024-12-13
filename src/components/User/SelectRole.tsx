"use client";

import { useState } from "react";
import CheckBox from "../CheckBox";

const SelectRole = () => {
  const [selectRole, setSelectRole] = useState<string[]>([]);
  const ROLE_LIST = [
    { label: "ALL", option: "ALL" },
    { label: "Admin", option: "Admin" },
    { label: "Prime User", option: "PrimeUser" },
    { label: "Regular User", option: "RegularUser" },
    { label: "Viewer", option: "Viewer" },
  ];

  const selectUserRole = (option: string) => {
    if (selectRole.includes(option)) {
      setSelectRole((prev) => prev.filter((item) => item !== option));
    } else {
      setSelectRole((prev) => (prev.length ? [...prev, option] : [option]));
    }
  };
  return (
    <div className="">
      <div className="flex text-teal-800 items-center gap-2 border-b-2 border-b-gray-700 p-2 mt-2">
        <h3>Selected</h3>
        <div className="border border-teal-800 rounded-full w-5 h-5 flex items-center justify-center">
          <p className="text-xs font-bold">{selectRole.length}</p>
        </div>
      </div>
      <div className="flex gap-[100px] border-b-gray-200 border-b-2 py-3 p-2">
        <h3>사용자 권한</h3>
        {ROLE_LIST.map(({ label, option }) => (
          <div key={option} className="flex items-center gap-2">
            <CheckBox
              isChecked={selectRole.includes(option)}
              onClick={() => selectUserRole(option)}
            />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectRole;
