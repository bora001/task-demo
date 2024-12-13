import { formatTime } from "@/utils/default-time-setting";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { SortingState, Table, flexRender } from "@tanstack/react-table";
import { Dispatch, SetStateAction } from "react";
interface CommonTableProps<T> {
  table: Table<T>;
  setSorting: Dispatch<SetStateAction<SortingState>>;
}
const CommonTable = <T,>({ table, setSorting }: CommonTableProps<T>) => {
  return (
    <div className="overflow-scroll mt-[80px] flex-1 h-[auto]">
      <table>
        <thead className="sticky top-[-1px] bg-white">
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

export default CommonTable;
const STYLE = {
  ARROW_ICON: "w-2 h-2",
  CELL_WIDTH: "min-w-[200px]  ",
};
