import Header from "@/components/Header/Header";
import UserContent from "@/components/User/UserContent";
import React from "react";

const Users = () => {
  return (
    <div className="flex-1 p-4">
      <Header title="User List" />
      <UserContent />
    </div>
  );
};

export default Users;
