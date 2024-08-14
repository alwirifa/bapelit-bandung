"use client";

import React, { useState, useEffect } from "react";
import IKKBarChart from "@/components/home/ikk/bar-chart";
import IKKLineChart from "@/components/home/ikk/line-chart";
import IKKPieChart from "@/components/home/ikk/pie-chart";
import Container from "@/components/home/layout/container";
import { Loader2 } from "lucide-react";
import { dataSets, DataSet } from "@/components/home/ikk/data";

interface YearOption {
  year: number;
}

const allYears: YearOption[] = [
  { year: 2018 },
  { year: 2019 },
  { year: 2020 },
  { year: 2021 },
  { year: 2022 },
];

function Page() {
  const [selectedOption, setSelectedOption] = useState<keyof DataSet>("ipm");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value as keyof DataSet);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedOption, selectedYear]);

  const filteredData =
    selectedYear === "all"
      ? dataSets[selectedOption].filter((item) => item.year <= 2022)
      : dataSets[selectedOption].filter(
          (item) => item.year === parseInt(selectedYear) && item.year <= 2022
        );

  console.log(selectedYear);

  const optionNames: { [key in keyof typeof dataSets]: string } = {
    ipm: "Indeks Pembangunan Manusia (IPM)",
    "harapan-lama-sekolah": "Harapan Lama Sekolah",
    "rata-rata-lama-sekolah": "Rata-Rata Lama Sekolah",
    "umur-harapan-hidup": "Umur Harapan Hidup",
    "pengeluaran-per-kapita":
      "Pengeluaran Per Kapita per Tahun yang Disesuaikan",
    lpe: "Laju Pertumbuhan Ekonomi (LPE)",
    "pdrb-berlaku": "PDRB Atas Dasar Harga Berlaku",
    "pdrb-konstan": "PDRB Atas Dasar Harga Konstan",
    "tingkat-pengangguran-terbuka": "Tingkat Pengangguran Terbuka",
    inflasi: "Inflasi",
    "tingkat-kemiskinan": "Tingkat Kemiskinan",
    "jumlah-penduduk-miskin": "Jumlah Penduduk Miskin",
    "ketimpangan-pendapatan": "Ketimpangan Pendapatan (Koefisien Gini)",
  };

  return (
    <div className="py-6 pt-32 flex flex-col gap-6">
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
              <h1 className="text-[24px] sm:text-[30px] md:text-[40px] text-blue-500 font-bold max-w-xl">
                Indikator Kinerja Kunci (IKK)
              </h1>
              <p className="text-sm sm:text-base text-justify md:text-left">
                Modul ini menyediakan format dan data profil daerah untuk
                mempermudah penyusunan Indikator Kinerja Kota (IKK). Dalam
                proses penyusunan IKK, data capaian yang mencerminkan kinerja
                OPD saat ini sangat diperlukan. Informasi tersebut membantu
                Bidang Perencanaan dalam memantau pembangunan daerah secara real
                time, sehingga kondisi Kota Bandung dapat diketahui dan
                digunakan sebagai acuan untuk menyusun IKK tahun mendatang.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border p-4 sm:p-6 md:p-12 mt-8 rounded-lg">
          <h1 className="text-xl sm:text-2xl font-semibold max-w-xl">
            Pilih Bidang
          </h1>

          <div className="w-full flex flex-col sm:flex-row gap-4">
            <div className="w-full max-w-xs">
              <label
                htmlFor="indicator-select"
                className="block text-base sm:text-lg font-medium text-gray-700 mb-2"
              >
                Pilih Indikator untuk Melihat Detail
              </label>
              <select
                id="indicator-select"
                className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                {Object.keys(optionNames).map((key) => (
                  <option key={key} value={key}>
                    {optionNames[key as keyof typeof optionNames]}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full max-w-xs">
              <label
                htmlFor="year-select"
                className="block text-base sm:text-lg font-medium text-gray-700 mb-2"
              >
                Pilih Tahun
              </label>
              <select
                id="year-select"
                className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={selectedYear}
                onChange={handleYearChange}
              >
                <option value="all">Semua Tahun</option>
                {allYears.map((item) => (
                  <option key={item.year} value={item.year.toString()}>
                    {item.year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-6 border rounded-lg p-4 sm:p-6 md:p-8 mt-8">
            {loading ? (
              <div className="w-full flex justify-center items-center min-h-[50vh]">
                <Loader2 className="size-16 animate-spin text-blue-500" />
              </div>
            ) : (
              <div className="w-full flex flex-col">
                <div className="flex flex-col w-full gap-6">
                  <h1 className="text-xl sm:text-2xl font-semibold">
                    {optionNames[selectedOption]}
                  </h1>
                  <p className="text-sm sm:text-base">
                    Indikator Makro Kota Bandung Tahun 2018-2022
                  </p>
                </div>

                <div className="mt-4 xl:mt-0 flex flex-col gap-6 w-full">
                  <IKKLineChart data={filteredData} />
                  <div className="w-full flex flex-col xl:flex-row gap-4">
                    <IKKBarChart data={filteredData} />
                    <IKKPieChart data={filteredData} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Page;
