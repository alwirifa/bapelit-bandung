// Import necessary components and image data
import { paths } from "@/paths";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  mengurangiKemiskinan,
  mengakhiriKelaparan,
  kesehatan,
  pendidikan,
  kesetaraanGender,
  airbersihSanitasi,
  energibersihTerjangkau,
  pekerjaanLayak,
  infrastruktur,
  mengurangiKetimpangan,
  kotaKomunitas,
  konsumsiProduksi,
  penangananIklim,
  ekosistemLaut,
  ekosistemDarat,
  perdamaian,
  kemitraan,
} from "../../../../public/assets/icons/index";

const sdgs = [
  {
    label: "Mengurangi Kemiskinan",
    route: paths.home.sdgs.kemiskinan,
    image: mengurangiKemiskinan,
    subtitle: "Mengakhiri kemiskinan dalam segala bentuk dimanapun",
  },
  {
    label: "Mengakhiri Kelaparan",
    route: paths.home.sdgs.kelaparan,
    image: mengakhiriKelaparan,
    subtitle:
      "Mengakhiri kelaparan, mencapai ketahanan pangan dan nutrisi yang lebih baik dan mendukung pertanian berkelanjutan",
  },
  {
    label: "Kesehatan dan Kesejahteraan",
    route: paths.home.sdgs.kesehatan,
    image: kesehatan,
    subtitle:
      "Memastikan kehidupan yang sehat dan mendukung kesejahteraan bagi semua untuk semua usia",
  },
  {
    label: "Pendidikan Berkualitas",
    route: paths.home.sdgs.pendidikan,
    image: pendidikan,
    subtitle:
      "Memastikan pendidikan yang inklusif dan berkualitas setara, juga mendukung kesempatan belajar seumur hidup",
  },
  {
    label: "Kesetaraan Gender",
    route: paths.home.sdgs.gender,
    image: kesetaraanGender,
    subtitle:
      "Mencapai kesetaraan gender dan memberdayakan semua perempuan dan anak perempuan",
  },
  {
    label: "Air Bersih dan Sanitasi",
    route: paths.home.sdgs.airbersih,
    image: airbersihSanitasi,
    subtitle:"Memastikan ketersediaan dan manajemen air bersih yang berkelanjutan dan sanitasi bagi semua",
  },
  {
    label: "Energi Bersih dan Terjangkau",
    route: paths.home.sdgs.energi,
    image: energibersihTerjangkau,
    subtitle:"Memastikan akses terhadap energi yang terjangkau, dapat diandalkan, berkelanjutan dan modern bagi semua"
  },
  {
    label: "Pekerjaan Layak dan Pertumbuhan Ekonomi",
    route: paths.home.sdgs.ekonomi,
    image: pekerjaanLayak,
    subtitle:"Mendukung pertumbuhan ekonomi yang inklusif dan berkelanjutan, tenaga kerja penuh dan produktif dan pekerjaan yang layak bagi semua"
  
  },
  {
    label: "Industri, Inovasi, dan Infrastruktur",
    route: paths.home.sdgs.inovasi,
    image: infrastruktur,
  
    subtitle:"Membangun infrastruktur yang tangguh, mendukung industrialisasi yang inklusif dan berkelanjutan dan membantu perkembangan inovasi"
  },
  {
    label: "Mengurangi Ketimpangan",
    route: paths.home.sdgs.ketimpangan,
    image: mengurangiKetimpangan,
    subtitle:"Mengurangi ketimpangan didalam dan antar negara"
  },
  {
    label: "Kota dan Komunitas Berkelanjutan",
    route: paths.home.sdgs.kota,
    image: kotaKomunitas,
    subtitle:"Membangun kota dan pemukiman yang inklusif, aman, tangguh dan berkelanjutan"
  },
  {
    label: "Konsumsi dan Produksi yang Bertanggung Jawab",
    route: paths.home.sdgs.konsumsi,
    image: konsumsiProduksi,
    subtitle:"Memastikan pola konsumsi dan produksi yang berkelanjutan"
  },
  {
    label: "Tindakan Iklim",
    route: paths.home.sdgs.iklim,
    image: penangananIklim,
    subtitle:"Mengambil aksi segera untuk memerangi perubahan iklim dan dampaknya"
  },
  {
    label: "Kehidupan di Bawah Air",
    route: paths.home.sdgs.laut,
    image: ekosistemLaut,
    subtitle:"Mengkonservasi dan memanfaatkan secara berkelanjutan sumber daya laut, asamudra dan maritim untuk pembangunan yang berkelanjutan"
  },
  {
    label: "Kehidupan di Darat",
    route: paths.home.sdgs.darat,
    image: ekosistemDarat,
    subtitle:"Melindungi, memulihkan dan mendukung penggunaan yang berkelanjutan terhadap ekosistem daratan, mengelola hutan secara berkelanjutan"
  },
  {
    label: "Perdamaian, Keadilan, dan Kelembagaan Kuat",
    route: paths.home.sdgs.perdamaian,
    image: perdamaian,
    subtitle:"Mendukung masyarakat yang damai dan inklusif untuk pembangunan berkelanjutan"
  },
  {
    label: "Kemitraan untuk Mencapai Tujuan",
    route: paths.home.sdgs.kemitraan,
    image: kemitraan,
    subtitle:"Menguatkan ukuran implementasi dan merevitalisasi kemitraan global untuk pembangunan yang berkelanjutan"
  },
];
function Card() {
  return (
    <div className=" pt-16  md:px-6 max-w-7xl w-full mx-auto">
      <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
        {sdgs.map((x) => {
          return (
            <>
              <article
                key={x.label}
                className=" md:px-6 transition duration-300 group transform hover:-translate-y-2  cursor-pointer"
              >
                <Link
                  href={x.route}
                  className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                />
                <div className="relative mb-4 rounded-md">
                  <Image
                    width={400}
                    height={400}
                    className="max-h-[300px]  w-full object-contain transition-transform duration-300 transform group-hover:scale-105"
                    src={x.image}
                    alt=""
                  />
                  <Link
                    className="flex justify-center p-6 items-center text-xs lg:text-sm text-center italic bg-black/70 bg-opacity-80  absolute top-0 left-0 w-full h-full text-white rounded-md opacity-0 transition-all duration-300 transform group-hover:scale-105 group-hover:opacity-100"
                    href={x.route}
                    rel="noopener noreferrer"
                  >
                    {x.subtitle}
                  </Link>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
