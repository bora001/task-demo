"use client";

import { useState } from "react";
import SelectIndicator from "../SelectIndicator";
import SelectRow from "../SelectRow";
import { UserListType } from "./UserContent";

const SelectRole = ({ list }: { list: UserListType[] }) => {
  const [selectRole, setSelectRole] = useState<string[]>([]);
  const uniqueUserRoles = [...new Set(list.map((item) => item.userRole))];
  const ROLE_LIST = uniqueUserRoles.map((role) => ({
    label: role,
    option: role,
  }));

  const selectUserRole = (option: string) => {
    if (selectRole.includes(option)) {
      setSelectRole((prev) => prev.filter((item) => item !== option));
    } else {
      setSelectRole((prev) => (prev.length ? [...prev, option] : [option]));
    }
  };
  return (
    <div className="">
      <SelectIndicator />
      <SelectRow
        title="사용자 권한"
        list={ROLE_LIST}
        selected={selectRole}
        onClick={selectUserRole}
      />
    </div>
  );
};

export default SelectRole;
