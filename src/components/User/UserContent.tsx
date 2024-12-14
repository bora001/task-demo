"use client";

import { useState } from "react";
import InviteUser from "./InviteUser";
import SelectRole from "./SelectRole";
import UserList from "./UserList";
import list from "@api/user_list.json";
import useFilterList from "@/hooks/useFilterList";
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
  useFilterList({ setList: setUserList, list });

  return (
    <>
      <InviteUser />
      <SelectRole
        {...{ list, selectRole, setSelectRole, count: userList.length }}
      />
      <UserList list={userList} />
    </>
  );
};

export default UserContent;
