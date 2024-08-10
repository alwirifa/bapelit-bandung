"use client";

import React from "react";
import {
  CloudSunRain,
  Equal,
  Grid2X2,
  School,
  GlassWater,
  Hospital,
  Salad,
  Droplet,
  ClipboardType,
  MoreHorizontal,
  Workflow,
} from "lucide-react";

const rpjmdCategories = [
  { icon: <CloudSunRain />, label: "Iklim - (RPJMD)" },
 
  { icon: <Grid2X2 />, label: "Lahan - (RPJMD)" },
  { icon: <School />, label: "Pendidikan - (RPJMD)" },
  { icon: <Hospital />, label: "Kesehatan - (RPJMD)" },
  { icon: <Salad />, label: "Pangan - (RPJMD)" },
];

const sdgsCategories = [
  { icon: <Droplet />, label: "Akses Air Bersih - (SGDS)" },
  { icon: <Workflow />, label: "Lapangan Pekerjaan - (SGDS)" },
  { icon: <ClipboardType />, label: "Kota dan Komunitas - (SGDS)" },
  { icon: <Equal />, label: "Kesetaraan Gender - (SGDS)" },
  { icon: <MoreHorizontal />, label: "Lainnya" },
];

function CariDataCard() {
  return (
    <div className="flex gap-16 w-full">
      <div className="w-full flex flex-col gap-6">
        {rpjmdCategories.map((card, index) => (
          <div
            key={index}
            className="flex gap-2 rounded-lg border shadow-md overflow-hidden p-4 text-sm group bg-white hover:bg-blue-500 hover:text-white hover:border-blue-500 ease-in-out cursor-pointer"
          >
            {card.icon}
            <p>{card.label}</p>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col gap-6">
        {sdgsCategories.map((card, index) => (
          <div
            key={index}
            className="flex gap-2 rounded-lg border shadow-md overflow-hidden p-4 text-sm group bg-white hover:bg-blue-500 hover:text-white hover:border-blue-500 ease-in-out cursor-pointer"
          >
            {card.icon}
            <p>{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CariDataCard;
