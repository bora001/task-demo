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
  return (
    <div>
      <InviteUser />
      <SelectRole list={list} />
      <UserList list={list} />
    </div>
  );
};

export default UserContent;
