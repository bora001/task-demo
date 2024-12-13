import CustomSelect from "../CustomSelect";
import SearchInput from "../SearchInput";

const CreateTask = () => {
  const SELECT_LIST = [
    { value: "taskName", label: "Task Name" },
    { value: "reporter", label: "Reporter" },
    { value: "taskDescription", label: "Description" },
    { value: "assignee", label: "담당자 (Assignee)" },
  ];
  return (
    <div className="flex gap-5 items-center">
      <div className="flex gap-2">
        <CustomSelect list={SELECT_LIST} />
        <SearchInput />
      </div>
      <button className="btn">Create Task</button>
    </div>
  );
};

export default CreateTask;
