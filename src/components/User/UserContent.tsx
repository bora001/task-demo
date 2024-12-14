"use client";

import { useMemo, useState } from "react";
import InviteUser from "./InviteUser";
import SelectRole from "./SelectRole";
import UserList from "./UserList";
import list from "@api/user_list.json";
import useFilterList from "@/hooks/useFilterList";
import { useUserStore } from "@/providers/UserProvider";
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
  const { userRole, userName } = useUserStore((state) => state);

  const filteredList = useMemo(() => {
    if (userRole === "RegularUser") {
      return list.filter((item) => item.userName === userName);
    } else {
      return list;
    }
  }, [userName, userRole]);
  const [userList, setUserList] = useState<UserListType[]>(filteredList);
  useFilterList({ setList: setUserList, list: filteredList });

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
