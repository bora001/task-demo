import CreateTask from "./CreateTask";
import SelectTask from "./SelectTask";
import UserTaskList from "./UserTaskList";
import list from "@api/task_list.json";
export type TaskListType = {
  taskType: string;
  taskName: string;
  taskDescription: string;
  assignee: string;
  reporter: string;
  status: string;
  dueDate: string;
  createdAt: string;
  completedAt: string | null;
};

const TaskContent = () => {
  return (
    <div className="flex flex-col max-h-[calc(100vh-32px)]">
      <CreateTask />
      <SelectTask list={list} />
      <UserTaskList list={list} />
    </div>
  );
};

export default TaskContent;
