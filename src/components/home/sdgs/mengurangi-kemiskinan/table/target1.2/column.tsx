"use client";

import { ColumnDef } from "@tanstack/react-table";

// export type Payment = {
//   id: string;
//   amount: number;
//   status: "pending" | "processing" | "success" | "failed";
//   email: string;
// };

export const columns: ColumnDef<any>[] = [
 
  {
    accessorKey: "no",
    header: "Kode Indikator",
  },
  {
    accessorKey: "indikator",
    header: "indikator",
  },
  {
    accessorKey: "sumber",
    header: "Sumber Data",
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
];
