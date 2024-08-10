"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "no",
    header: "No",
  },
  {
    accessorKey: "uraian",
    header: "Uraian",
  },
  {
    accessorKey: "satuan",
    header: "Satuan",
  },
  { accessorKey: "2017", header: "2017" },
  { accessorKey: "2018", header: "2018" },
  { accessorKey: "2019", header: "2019" },
  { accessorKey: "2020", header: "2020" },
  { accessorKey: "2021", header: "2021" },
  { accessorKey: "2022", header: "2022" },
  { accessorKey: "2023", header: "2023" },
  { accessorKey: "2024", header: "2024" },
  { accessorKey: "2025", header: "2025" },
];
