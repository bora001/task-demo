"use client";

import { useEffect, useState } from "react";
import InviteUser from "./InviteUser";
import SelectRole from "./SelectRole";
import UserList from "./UserList";
import list from "@api/user_list.json";
export type UserListType = {
  userName: string;
  userPhone: string;
  userEmail: string;
  userRole: string;
  createdAt: string;
  lastLoggedInAt: string;
};
const UserContent = () => {
  const [selectRole, setSelectRole] = useState<string[]>([]);
  const [userList, setUserList] = useState<UserListType[]>(list);
  useEffect(() => {
    if (selectRole.length) {
      const newList = list.filter((item) => selectRole.includes(item.userRole));
      setUserList(newList);
    } else {
      setUserList(list);
    }
  }, [selectRole, selectRole.length]);

  return (
    <>
      <InviteUser />
      <SelectRole {...{ list, selectRole, setSelectRole }} />
      <UserList list={userList} />
    </>
  );
};

export default UserContent;
