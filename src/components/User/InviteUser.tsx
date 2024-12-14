import { useUserStore } from "@/providers/UserProvider";
import CustomSelect from "../CustomSelect";
import SearchInput from "../SearchInput";
import useSetSelect from "@/hooks/useSetSelect";

const SELECT_LIST = [
  { value: "userName", label: "User Name" },
  { value: "userEmail", label: "User Email" },
  { value: "userPhone", label: "User Phone" },
];

const InviteUser = () => {
  const { setSelect, searchHandler } = useSetSelect();
  const { userRole } = useUserStore((state) => state);
  const notAllowed = userRole !== "Admin";

  return (
    <div className="flex gap-5 items-center">
      <div className="flex gap-2">
        <CustomSelect list={SELECT_LIST} setSelect={setSelect} />
        <SearchInput searchHandler={searchHandler} />
      </div>
      <button
        className={notAllowed ? "btn-disabled" : "btn"}
        disabled={notAllowed}
      >
        Invite User
      </button>
    </div>
  );
};

export default InviteUser;
