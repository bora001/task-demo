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
import { UserListType } from "./UserContent";

const UserList = ({ list }: { list: UserListType[] }) => {
  const columns: ColumnDef<UserListType>[] = useMemo(
    () => [
      {
        accessorKey: "userName",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "userEmail",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "userRole",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "userPhone",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "createdAt",
        cell: (info) => formatTime(info.getValue() as string),
      },
      {
        accessorKey: "lastLoggedInAt",
        cell: (info) => formatTime(info.getValue() as string),
      },
    ],
    []
  );

  // const [data, setData] = useState<UserListType[]>(list);
  //   const refreshData = () => setData((_old) => makeData(50_000)); //stress test
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: list,
    columns,
    filterFns: {},
    state: {
      sorting,
      // columnFilters,
    },
    // onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  return <CommonTable table={table} setSorting={setSorting} />;
};

export default UserList;
