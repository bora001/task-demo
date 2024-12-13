"use client";

import { useState } from "react";
import SelectIndicator from "../SelectIndicator";
import SelectRow from "../SelectRow";
import { TaskListType } from "./TaskContent";

const SelectTask = ({ list }: { list: TaskListType[] }) => {
  const [selectRole, setSelectRole] = useState<string[]>([]);
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
  const selectUserRole = (option: string) => {
    if (selectRole.includes(option)) {
      setSelectRole((prev) => prev.filter((item) => item !== option));
    } else {
      setSelectRole((prev) => (prev.length ? [...prev, option] : [option]));
    }
  };
  return (
    <div className="">
      <SelectIndicator count={list.length} />
      <SelectRow
        title="Task Type"
        list={TASK_LIST}
        selected={selectRole}
        onClick={selectUserRole}
      />
      <SelectRow
        title="상태"
        list={STATUS_LIST}
        selected={selectRole}
        onClick={selectUserRole}
      />
    </div>
  );
};

export default SelectTask;
