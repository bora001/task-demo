"use client";

import { Dispatch, SetStateAction } from "react";
import SelectIndicator from "../SelectIndicator";
import SelectRow from "../SelectRow";
import { TaskListType } from "./TaskContent";
import useFilterItems from "@/hooks/useFilterItems";

const SelectTask = ({
  list,
  selectTask,
  setSelectTask,
  selectStatus,
  setSelectStatus,
  count,
}: {
  list: TaskListType[];
  selectTask: string[];
  selectStatus: string[];
  setSelectTask: Dispatch<SetStateAction<string[]>>;
  setSelectStatus: Dispatch<SetStateAction<string[]>>;
  count: number;
}) => {
  const uniqueTaskName = [...new Set(list.map((item) => item.taskName))];
  const uniqueStatus = [...new Set(list.map((item) => item.status))];
  const TASK_LIST = uniqueTaskName.map((task) => ({
    label: task,
    option: task,
  }));
  const STATUS_LIST = uniqueStatus.map((status) => ({
    label: status,
    option: status,
  }));
  const { selectQuery: setTaskQuery } = useFilterItems({
    setSelectQuery: setSelectTask,
    type: "taskName",
  });
  const { selectQuery: setStatusQuery } = useFilterItems({
    setSelectQuery: setSelectStatus,
    type: "status",
  });

  return (
    <div className="">
      <SelectIndicator count={count} />
      <SelectRow
        title="Task Type"
        list={TASK_LIST}
        selected={selectTask}
        onClick={setTaskQuery}
      />
      <SelectRow
        title="상태"
        list={STATUS_LIST}
        selected={selectStatus}
        onClick={setStatusQuery}
      />
    </div>
  );
};

export default SelectTask;
