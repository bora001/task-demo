import { useUserStore } from "@/providers/UserProvider";
import CustomSelect from "../CustomSelect";
import SearchInput from "../SearchInput";
import useSetSelect from "@/hooks/useSetSelect";

const SELECT_LIST = [
  { value: "taskName", label: "Task Name" },
  { value: "reporter", label: "Reporter" },
  { value: "taskDescription", label: "Description" },
  { value: "assignee", label: "담당자 (Assignee)" },
];

const CreateTask = () => {
  const { setSelect, searchHandler } = useSetSelect();
  const { userRole } = useUserStore((state) => state);
  const notAllowed = userRole === "Viewer";
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
        Create Task
      </button>
    </div>
  );
};

export default CreateTask;
