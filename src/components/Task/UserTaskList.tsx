"use client";
import {
  ColumnDef,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { formatTime } from "@/utils/default-time-setting";
import CommonTable from "../Table/CommonTable";
import { TaskListType } from "./TaskContent";
import { CardStackIcon } from "@radix-ui/react-icons";

const UserTaskList = ({ list }: { list: TaskListType[] }) => {
  const columns: ColumnDef<TaskListType>[] = useMemo(
    () => [
      {
        accessorKey: "taskName",
        header: () => (
          <div className="flex gap-2 items-center">
            <CardStackIcon className="text-teal-800" />
            Task Name
          </div>
        ),
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "taskType",
        header: () => <>Task Type</>,
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "createdAt",
        header: () => <>Created At</>,
        cell: (info) => formatTime(info.getValue() as string),
      },
      {
        accessorKey: "dueDate",
        header: () => <>Due Date</>,
        cell: (info) => formatTime(info.getValue() as string),
      },
      {
        accessorKey: "reporter",
        header: () => <>Reporter</>,
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "taskDescription",
        header: () => <>Description</>,
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "assignee",
        header: () => <>담당자(Assignee)</>,
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "status",
        header: () => <>상태(Status)</>,
        cell: (info) => info.getValue(),
      },
    ],
    []
  );

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: list,
    columns,
    filterFns: {},
    state: {
      sorting,
      pagination: {
        pageIndex: 0,
        pageSize: 20,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  return <CommonTable table={table} setSorting={setSorting} />;
};

export default UserTaskList;
