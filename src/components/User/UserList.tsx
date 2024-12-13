"use client";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import list from "@api/user_list.json";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { formatTime } from "@/utils/default-time-setting";
export type UserListType = {
  userName: string;
  userPhone: string;
  userEmail: string;
  userRole: string;
  createdAt: string;
  lastLoggedInAt: string;
};

const UserList = () => {
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
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "lastLoggedInAt",
        cell: (info) => info.getValue(),
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

  return (
    <div className="p-2 mt-5">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className={STYLE.CELL_WIDTH}
                  >
                    {header.isPlaceholder ? null : (
                      <div className="flex p-3 gap-3 items-center m-auto  w-fit">
                        {/* 컬럼 이름 */}
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}

                        <div className="flex flex-col ">
                          {/* ASC 버튼 */}
                          <div
                            onClick={() =>
                              setSorting((prev) => [
                                ...prev,
                                { desc: false, id: header.id },
                              ])
                            }
                            style={{
                              cursor: header.column.getCanSort()
                                ? "pointer"
                                : "default",
                              color:
                                header.column.getIsSorted() === "asc"
                                  ? "blue"
                                  : "black",
                            }}
                          >
                            <ChevronUpIcon className={STYLE.ARROW_ICON} />
                          </div>

                          {/* DESC 버튼 */}
                          <div
                            onClick={() =>
                              setSorting((prev) => [
                                ...prev,
                                { desc: true, id: header.id },
                              ])
                            }
                            style={{
                              cursor: header.column.getCanSort()
                                ? "pointer"
                                : "default",
                              color:
                                header.column.getIsSorted() === "desc"
                                  ? "blue"
                                  : "black",
                            }}
                          >
                            <ChevronDownIcon className={STYLE.ARROW_ICON} />
                          </div>
                        </div>
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className="border-b-2 h-[50px]">
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className="p-3">
                      {cell.id.includes("At")
                        ? formatTime(cell.getValue() as string)
                        : flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
    </div>
  );
};

export default UserList;

const STYLE = {
  ARROW_ICON: "w-2 h-2",
  CELL_WIDTH: "min-w-[200px]  ",
};
