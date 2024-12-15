import Header from "@/components/Header/Header";
import UserContent from "@/components/User/UserContent";
import { Suspense } from "react";

const Users = () => {
  return (
    <Suspense>
      <div className="flex-1 p-4">
        <Header title="User List" />
        <UserContent />
      </div>
    </Suspense>
  );
};

export default Users;
