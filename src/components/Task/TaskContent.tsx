"use client";
import { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import SelectTask from "./SelectTask";
import UserTaskList from "./UserTaskList";
import list from "@api/task_list.json";
import useGetSearchParams from "@/hooks/useGetSearchParams";

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
  const [taskList, setTaskList] = useState<TaskListType[]>(list);
  const { query } = useGetSearchParams();
  useEffect(() => {
    if (query.task?.split("&").length) {
      setSelectTask(query.task?.split("&"));
    }
    if (query.status?.split("&").length) {
      setSelectStatus(query.status?.split("&"));
    }
  }, [query]);

  useEffect(() => {
    if (selectTask.length > 0) {
      const newList = list.filter((item) => {
        return selectStatus.length > 0
          ? selectTask.includes(item.taskName) &&
              selectStatus.includes(item.status)
          : selectTask.includes(item.taskName);
      });
      setTaskList(newList);
    } else {
      setTaskList(list);
    }
  }, [selectTask, selectStatus]);

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
