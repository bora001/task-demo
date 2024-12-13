import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import CustomSelect from "../CustomSelect";

const InviteUser = () => {
  const SELECT_LIST = [
    { value: "userName", label: "User Name" },
    { value: "userEmail", label: "User Email" },
    { value: "userPhone", label: "User Phone" },
  ];
  return (
    <div className="flex gap-5 items-center">
      <div className="flex gap-2">
        <CustomSelect list={SELECT_LIST} />
        <div className="border rounded-md w-[200px] flex items-center justify-between py-1 px-2">
          <input placeholder="Search" />
          <MagnifyingGlassIcon />
        </div>
      </div>

      <button className="btn">Invite User</button>
    </div>
  );
};

export default InviteUser;
