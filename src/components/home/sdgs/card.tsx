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
  },
  {
    label: "Mengakhiri Kelaparan",
    route: paths.home.sdgs.kelaparan,
    image: mengakhiriKelaparan,
  },
  {
    label: "Kesehatan dan Kesejahteraan",
    route: paths.home.sdgs.kesehatan,
    image: kesehatan,
  },
  {
    label: "Pendidikan Berkualitas",
    route: paths.home.sdgs.pendidikan,
    image: pendidikan,
  },
  {
    label: "Kesetaraan Gender",
    route: paths.home.sdgs.gender,
    image: kesetaraanGender,
  },
  {
    label: "Air Bersih dan Sanitasi",
    route: paths.home.sdgs.airbersih,
    image: airbersihSanitasi,
  },
  {
    label: "Energi Bersih dan Terjangkau",
    route: paths.home.sdgs.energi,
    image: energibersihTerjangkau,
  },
  {
    label: "Pekerjaan Layak dan Pertumbuhan Ekonomi",
    route: paths.home.sdgs.ekonomi,
    image: pekerjaanLayak,
  },
  {
    label: "Industri, Inovasi, dan Infrastruktur",
    route: paths.home.sdgs.inovasi,
    image: infrastruktur,
  },
  {
    label: "Mengurangi Ketimpangan",
    route: paths.home.sdgs.ketimpangan,
    image: mengurangiKetimpangan,
  },
  {
    label: "Kota dan Komunitas Berkelanjutan",
    route: paths.home.sdgs.kota,
    image: kotaKomunitas,
  },
  {
    label: "Konsumsi dan Produksi yang Bertanggung Jawab",
    route: paths.home.sdgs.konsumsi,
    image: konsumsiProduksi,
  },
  {
    label: "Tindakan Iklim",
    route: paths.home.sdgs.iklim,
    image: penangananIklim,
  },
  {
    label: "Kehidupan di Bawah Air",
    route: paths.home.sdgs.laut,
    image: ekosistemLaut,
  },
  {
    label: "Kehidupan di Darat",
    route: paths.home.sdgs.darat,
    image: ekosistemDarat,
  },
  {
    label: "Perdamaian, Keadilan, dan Kelembagaan Kuat",
    route: paths.home.sdgs.perdamaian,
    image: perdamaian,
  },
  {
    label: "Kemitraan untuk Mencapai Tujuan",
    route: paths.home.sdgs.kemitraan,
    image: kemitraan,
  },
];
function Card() {
  return (
    <div className="mt-0 md:mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-8 md:gap-y-8">
      {sdgs.map((sdg, index) => (
        <Link href={sdg.route} key={index} className=" duration-300">
          <div className="block relative h-[180px] md:h-[200px] lg:h-[220px] xl:h-[350px]  w-full ">
            <Image
              src={sdg.image}
              alt={sdg.label}
              layout="fill"
              objectFit="contain"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
