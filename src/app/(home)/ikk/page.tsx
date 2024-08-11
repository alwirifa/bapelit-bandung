import Container from "@/components/home/layout/container";
import Card from "@/components/home/sdgs/card";

import React from "react";

function page() {
  return (
    <div className=" py-6 pt-32 flex flex-col gap-6">
      <div className="border-b shadow-md">
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
                  Indikator Kinerja Kunci (IKK)
                </h1>
                <p className="text-base text-justify md:text-left">
                  Modul ini menyediakan format dan data profil daerah untuk
                  mempermudah penyusunan Indikator Kinerja Kota (IKK). Dalam
                  proses penyusunan IKK, data capaian yang mencerminkan kinerja
                  OPD saat ini sangat diperlukan. Informasi tersebut membantu
                  Bidang Perencanaan dalam memantau pembangunan daerah secara
                  real time, sehingga kondisi Kota Bandung dapat diketahui dan
                  digunakan sebagai acuan untuk menyusun IKK tahun mendatang.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold max-w-xl">Pilih Bidang</h1>
        </div>
      </Container>
    </div>
  );
}

export default page;
