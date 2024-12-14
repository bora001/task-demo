"use client";
import { useMemo, useState } from "react";
import CreateTask from "./CreateTask";
import SelectTask from "./SelectTask";
import UserTaskList from "./UserTaskList";
import list from "@api/task_list.json";
import useFilterList from "@/hooks/useFilterList";
import { useUserStore } from "@/providers/UserProvider";

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
  const [selectTask, setSelectTask] = useState<string[]>([]);
  const [selectStatus, setSelectStatus] = useState<string[]>([]);
  const { userRole, userName } = useUserStore((state) => state);
  const filteredList = useMemo(() => {
    if (userRole === "RegularUser") {
      return list.filter((item) => item.reporter === userName);
    } else if (userRole === "Viewer") {
      return list.filter((item) => item.assignee === userName);
    } else {
      return list;
    }
  }, [userName, userRole]);

  const [taskList, setTaskList] = useState<TaskListType[]>(filteredList);
  useFilterList({ setList: setTaskList, list: filteredList });

  return (
    <div className="flex flex-col max-h-[calc(100vh-32px)]">
      <CreateTask />
      <SelectTask
        {...{
          list,
          selectTask,
          setSelectTask,
          selectStatus,
          setSelectStatus,
          count: taskList.length,
        }}
      />
      <UserTaskList list={taskList} />
    </div>
  );
};

export default TaskContent;
