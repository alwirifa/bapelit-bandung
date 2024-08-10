"use client";

import React from "react";
import Link from "next/link";
import {  ArrowRight } from "lucide-react";
import { paths } from "@/paths";
import path from "path";

type CardData = {
    id: number;
    data: string;
    title: string;
    subtitle: string;
    href: string;
  };
  
  const cardData: CardData[] = [
    {
      id: 1,
      data: "13",
      title: "Data IKK",
      subtitle: "Indikator Kinerja Kunci yang Mengukur Prestasi dan Pencapaian Target Strategis",
      href: paths.home.ikk,
    },
    {
      id: 2,
      data: "24",
      title: "Data RPJMD",
      subtitle: "Kumpulan Data yang Mencakup Rencana Pembangunan Daerah Menengah dalam Berbagai Sektor",
      href: paths.home.rpjmd,
    },
    {
      id: 3,
      data: "17",
      title: "Data SDGS",
      subtitle: "Informasi dan Statistik tentang Tujuan Pembangunan Berkelanjutan yang Harus Dicapai di Masa Depan",
      href: paths.home.sdgs.overview,
    },
    {
      id: 4,
      data: "40",
      title: "Data Infografik",
      subtitle: "Data yang Disajikan dalam Bentuk Grafik dan Visual untuk Mempermudah Pemahaman dan Analisis",
      href: paths.home.infographics,
    },
  ];
  

function DataTerkumpulCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="flex flex-col gap-4 rounded-lg border shadow-md overflow-hidden p-6 group bg-white hover:bg-blue-500 hover:text-white hover:border-blue-500 ease-in-out cursor-pointer min-h-[300px]"
        >
          <div className="flex flex-col ">
            <h1 className="text-4xl font-bold">{card.data}</h1>
            <h2 className="text-2xl font-semibold mt-2">{card.title}</h2>
            <p className="text-sm mt-4">{card.subtitle}</p>
          </div>
          <div className="h-full flex items-end mt-6">
            <Link href={card.href} className="flex gap-2">
              <p className="text-sm font-semibold">Lihat selengkapnya</p>
              <ArrowRight/>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataTerkumpulCard;
