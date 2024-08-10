"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className={` bg-blue-500  text-white 
                    ${header.id === "no" && "rounded-tl-md "}
                    ${header.id === "2017" && "bg-red-500 "}
                    ${header.id === "2018" && "bg-orange-500 "}
                    ${header.id === "2019" && "bg-amber-500 "}
                    ${header.id === "2020" && "bg-yellow-500 "}
                    ${header.id === "2021" && "bg-green-500 "}
                    ${header.id === "2022" && "bg-teal-500  "}
                    ${header.id === "2023" && "bg-purple-500 "}
                    ${header.id === "2024" && "bg-indigo-500 "}
                    ${header.id === "2025" && "bg-gray-500 rounded-tr-md"}
                  `}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={` 
              
                    ${cell.column.id === "2017" && "bg-red-200 "}
                    ${cell.column.id === "2018" && "bg-orange-200 "}
                    ${cell.column.id === "2019" && "bg-amber-200 "}
                    ${cell.column.id === "2020" && "bg-yellow-200 "}
                    ${cell.column.id === "2021" && "bg-green-200 "}
                    ${cell.column.id === "2022" && "bg-teal-200  "}
                    ${cell.column.id === "2023" && "bg-purple-200 "}
                    ${cell.column.id === "2024" && "bg-indigo-200 "}
                    ${cell.column.id === "2025" && "bg-gray-200"}
                   
                      `}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
