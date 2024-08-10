import React from "react";
import Container from "../../layout/container";
import Image from "next/image";
import { DataTable } from "./data-table";
import { columns } from "./column";

async function getData(): Promise<any[]> {
  return [
    {
      id: "1",
      no: "1",
      uraian: "IPM",
      satuan: "Pont",
      2017: 80.00,
      2018: 81.06,
      2019: 82.00,
      2020: 82.50,
      2021: 83.00,
      2022: 83.50,
      2023: 84.00,
      2024: 84.50,
      2025: 85.00,
    },
    {
      id: "2",
      no: "2",
      uraian: "Harapan Lama Sekolah",
      satuan: "Tahun",
      2017: 12.0,
      2018: 12.5,
      2019: 12.6,
      2020: 12.7,
      2021: 12.8,
      2022: 12.9,
      2023: 13.0,
      2024: 13.1,
      2025: 13.2,
    },
    {
      id: "3",
      no: "3",
      uraian: "Rata-Rata Lama Sekolah",
      satuan: "Tahun",
      2017: 7.5,
      2018: 7.8,
      2019: 7.9,
      2020: 8.0,
      2021: 8.1,
      2022: 8.2,
      2023: 8.3,
      2024: 8.4,
      2025: 8.5,
    },
    {
      id: "4",
      no: "4",
      uraian: "Umur Harapan Hidup",
      satuan: "Tahun",
      2017: 71.5,
      2018: 72.1,
      2019: 72.3,
      2020: 72.5,
      2021: 72.7,
      2022: 72.9,
      2023: 73.1,
      2024: 73.3,
      2025: 73.5,
    },
    {
      id: "5",
      no: "5",
      uraian: "Pengeluaran Per Kapita per tahun yang disesuaikan",
      satuan: "Ribu Rp/ Orang/ Tahun",
      2017: 9500,
      2018: 10000,
      2019: 10200,
      2020: 10400,
      2021: 10600,
      2022: 10800,
      2023: 11000,
      2024: 11200,
      2025: 11400,
    },
    {
      id: "6",
      no: "6",
      uraian: "LPE",
      satuan: "%",
      2017: 4.9,
      2018: 5.0,
      2019: 5.1,
      2020: 5.2,
      2021: 5.3,
      2022: 5.4,
      2023: 5.5,
      2024: 5.6,
      2025: 5.7,
    },
    {
      id: "7",
      no: "7",
      uraian: "PDRB (Berlaku)",
      satuan: "Miliar Rp",
      2017: 490000,
      2018: 500000,
      2019: 510000,
      2020: 520000,
      2021: 530000,
      2022: 540000,
      2023: 550000,
      2024: 560000,
      2025: 570000,
    },
    {
      id: "8",
      no: "8",
      uraian: "PDRB (Konstan)",
      satuan: "Miliar Rp",
      2017: 440000,
      2018: 450000,
      2019: 460000,
      2020: 470000,
      2021: 480000,
      2022: 490000,
      2023: 500000,
      2024: 510000,
      2025: 520000,
    },
    {
      id: "9",
      no: "9",
      uraian: "Tingkat Pengangguran Terbuka",
      satuan: "%",
      2017: 6.6,
      2018: 6.5,
      2019: 6.4,
      2020: 6.3,
      2021: 6.2,
      2022: 6.1,
      2023: 6.0,
      2024: 5.9,
      2025: 5.8,
    },
    {
      id: "10",
      no: "10",
      uraian: "Inflasi",
      satuan: "%",
      2017: 2.8,
      2018: 3.0,
      2019: 3.2,
      2020: 3.1,
      2021: 3.3,
      2022: 3.4,
      2023: 3.5,
      2024: 3.6,
      2025: 3.7,
    },
    {
      id: "11",
      no: "11",
      uraian: "Tingkat Kemiskinan",
      satuan: "%",
      2017: 10.2,
      2018: 10.0,
      2019: 9.8,
      2020: 9.6,
      2021: 9.4,
      2022: 9.2,
      2023: 9.0,
      2024: 8.8,
      2025: 8.6,
    },
    {
      id: "12",
      no: "12",
      uraian: "Jumlah Penduduk Miskin",
      satuan: "Ribu Orang",
      2017: 1550,
      2018: 1500,
      2019: 1450,
      2020: 1400,
      2021: 1350,
      2022: 1300,
      2023: 1250,
      2024: 1200,
      2025: 1150,
    },
    {
      id: "13",
      no: "13",
      uraian: "Ketimpangan Pendapatan (Koefisien Gini)",
      satuan: "Rasio",
      2017: 0.40,
      2018: 0.39,
      2019: 0.38,
      2020: 0.37,
      2021: 0.36,
      2022: 0.35,
      2023: 0.34,
      2024: 0.33,
      2025: 0.32,
    },
  ];
}

async function DataTerbaru() {
  const data = await getData();
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">
              Data Terbaru, akses dengan mudah
            </h1>
            <p>
              Kumpulan dataset, infografis dan pembaharuan terbaru dan
              terlengkap.
            </p>
          </div>
  
          <div className="w-full h-full relative flex justify-center items-center pt-8">
            <Image
              src={"/assets/Vectors.webp"}
              alt="vector"
              width={500}
              height={500}
              className="max-h-[500px] w-auto"
            />
          </div>
          <DataTable columns={columns} data={data} />
        </div>
      </Container>
    </div>
  );
}

export default DataTerbaru;
