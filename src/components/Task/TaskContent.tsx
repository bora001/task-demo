"use client";
import { useState } from "react";
import CreateTask from "./CreateTask";
import SelectTask from "./SelectTask";
import UserTaskList from "./UserTaskList";
import list from "@api/task_list.json";
import useFilterList from "@/hooks/useFilterList";

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
  useFilterList({ setList: setTaskList, list });

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
