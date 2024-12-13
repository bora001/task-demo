import Header from "@/components/Header/Header";
import InviteUser from "@/components/User/InviteUser";
import SelectRole from "@/components/User/SelectRole";
import UserList from "@/components/User/UserList";
import React from "react";

const Users = () => {
  return (
    <div className="flex-1 p-4">
      <Header title="User List" />
      <InviteUser />
      <SelectRole />
      <UserList />
    </div>
  );
};

export default Users;
