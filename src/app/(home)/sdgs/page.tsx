import Container from "@/components/home/layout/container";
import Card from "@/components/home/sdgs/card";

import React from "react";

function page() {
  return (
    <div className=" py-6 border-b shadow-md">
      <Container>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full flex items-start justify-center">
              <img
                src="/assets/sdgs-banner.webp"
                alt="sdgs-banner"
                className="h-[240px] md:h-[350px] w-auto"
              />
            </div>
            <div className="w-full flex flex-col gap-2 py-6">
              <h1 className="text-[40px] text-blue-500 font-bold max-w-xl">
                Sustainable Development Goals
              </h1>
              <p className="text-base text-justify md:text-left">
                Serangkaian tujuan yang diadopsi oleh Perserikatan Bangsa-Bangsa
                (PBB) pada tahun 2015 sebagai bagian dari Agenda 2030 untuk
                Pembangunan Berkelanjutan. SDGs dirancang sebagai blueprint
                untuk mencapai masa depan yang lebih baik dan lebih
                berkelanjutan bagi semua. Berbagai laporan tantangan global yang
                dihadapi oleh pemerintah kota Bandung, termasuk kemiskinan,
                ketidaksetaraan, perubahan iklim, degradasi lingkungan,
                perdamaian, dan keadilan.
              </p>
            </div>
          </div>
          <Card />
        </div>
      </Container>
    </div>
  );
}

export default page;
