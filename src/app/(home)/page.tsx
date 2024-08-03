import Container from "@/components/home/layout/container";
import React from "react";
import {
  ClipboardType,
  Cloud,
  Equal,
  GlassWater,
  Hospital,
  MoreHorizontal,
  School,
  ThermometerSnowflakeIcon,
  Workflow,
} from "lucide-react";
import Image from "next/image";

const categories = [
  { icon: <Cloud />, label: "Iklim - (RPJMD)" },
  { icon: <ThermometerSnowflakeIcon />, label: "Lahan - (RPJMD)" },
  { icon: <Cloud />, label: "Pangan - (RPJMD)" },
  { icon: <School />, label: "Pendidikan - (RPJMD)" },
  { icon: <Hospital />, label: "Kesehatan - (RPJMD)" },
  { icon: <GlassWater />, label: "Akses Air Bersih - (SGDS)" },
  { icon: <Equal />, label: "Kesetaraan Gender - (SGDS)" },
  { icon: <Workflow />, label: "Lapangan Pekerjaan - (SGDS)" },
  { icon: <ClipboardType />, label: "Kota dan Komunitas - (SGDS)" },
  { icon: <MoreHorizontal />, label: "Lainnya" },
];

const dataIKK = [
  {
    indikator: "IPM",
    tahun2018: "640,0",
    tahun2019: "640,0",
    tahun2020: "640,0",
  },
  {
    indikator: "Harapan Lama Sekolah",
    tahun2018: "732,0",
    tahun2019: "745,0",
    tahun2020: "640,0",
  },
  {
    indikator: "Rata-Rata Lama Sekolah",
    tahun2018: "303,0",
    tahun2019: "303,0",
    tahun2020: "640,0",
  },
  {
    indikator: "Umur Harapan Hidup",
    tahun2018: "616,0",
    tahun2019: "626,0",
    tahun2020: "640,0",
  },
  {
    indikator: "Pengeluaran Per Kapita per tahun yang disesuaikan",
    tahun2018: "289,0",
    tahun2019: "289,0",
    tahun2020: "640,0",
  },
  {
    indikator: "LPE",
    tahun2018: "427,0",
    tahun2019: "430,0",
    tahun2020: "640,0",
  },
  {
    indikator: "PDRB (Berlaku)",
    tahun2018: "427,0",
    tahun2019: "430,0",
    tahun2020: "640,0",
  },
  {
    indikator: "Tingkat Pengangguran Terbuka",
    tahun2018: "427,0",
    tahun2019: "430,0",
    tahun2020: "640,0",
  },
];

function Page() {
  return (
    <div className="min-h-screen">
      <Container>
        <section className="bg-blue-500  flex flex-row w-full">
          <div className="w-full">
            <h1 className="text-5xl font-semibold text-white py-16 leading-relaxed">
              Cari data terkini penelitian di Jawa Barat disini
            </h1>
          </div>
          <div className="w-full"></div>
        </section>

        <section className="py-8 w-full flex flex-col gap-4">
          <h1 className="text-4xl font-bold">
            Data Terbaru, akses dengan mudah
          </h1>
          <p>
            Kumpulan dataset, infografis dan pembaharuan terbaru dan terlengkap.
          </p>
          <div className="flex flex-col md:flex-row items-center md:justify-between mt-8">
            <div className="w-full md:w-1/2">
              <Image
                src={"/assets/Vectors.webp"}
                alt="vector"
                width={400}
                height={400}
                className="max-h-[400px] w-auto"
              />
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b border-gray-200 bg-blue-500 text-white font-bold uppercase text-left">
                        Data IKK
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-blue-500 text-white font-bold uppercase text-left">
                        2018
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-blue-500 text-white font-bold uppercase text-left">
                        2019
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-blue-500 text-white font-bold uppercase text-left">
                        2020
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataIKK.map((item, index) => (
                      <tr key={index} className="bg-white">
                        <td className="px-6 py-4 border-b border-gray-200">
                          {item.indikator}
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200">
                          {item.tahun2018}
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200">
                          {item.tahun2019}
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200">
                          {item.tahun2020}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-4xl font-bold">Total data terkumpul</h1>
            <button className="bg-blue-500 text-white px-4 py-3 rounded-lg mt-4 md:mt-0 hover:bg-blue-600">
              Tampilkan semua kumpulan data
            </button>
          </div>
          <p className="text-gray-500 mt-2">
            Menampilkan data terbaru akurat dan terverifikasi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="p-4 border rounded-lg bg-white shadow-sm">
              <h2 className="text-3xl font-bold">1200</h2>
              <p className="font-semibold mt-2">Data RPJMD</p>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <button className="text-blue-500 mt-4 hover:underline">
                Lihat selengkapnya
              </button>
            </div>
            <div className="p-4 border rounded-lg bg-white shadow-sm">
              <h2 className="text-3xl font-bold">1000</h2>
              <p className="font-semibold mt-2">Data SGDS</p>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <button className="text-blue-500 mt-4 hover:underline">
                Lihat selengkapnya
              </button>
            </div>
            <div className="p-4 border rounded-lg bg-white shadow-sm">
              <h2 className="text-3xl font-bold">9</h2>
              <p className="font-semibold mt-2">Kota dataset</p>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <button className="text-blue-500 mt-4 hover:underline">
                Lihat selengkapnya
              </button>
            </div>
            <div className="p-4 border rounded-lg bg-white shadow-sm">
              <h2 className="text-3xl font-bold">20 - 24</h2>
              <p className="font-semibold mt-2">Dataset</p>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <button className="text-blue-500 mt-4 hover:underline">
                Lihat selengkapnya
              </button>
            </div>
          </div>
        </section>

        <section className="py-8 w-full flex flex-col gap-6">
          <h1 className="text-4xl font-bold">Cari data berdasarkan</h1>
          <p>Temukan data dengan kategori pilihan</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="flex items-center gap-2 border p-4 rounded-lg bg-white hover:bg-gray-100"
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Page;
