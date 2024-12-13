import CustomSelect from "../CustomSelect";
import SearchInput from "../SearchInput";

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
        <SearchInput />
      </div>

      <button className="btn">Invite User</button>
    </div>
  );
};

export default InviteUser;
