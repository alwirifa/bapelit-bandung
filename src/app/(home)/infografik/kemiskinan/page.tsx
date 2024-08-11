import Container from "@/components/home/layout/container";
import { paths } from "@/paths";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { dinner } from "../../../../../public/assets/icons";


function page() {
  return (
    <div className="py-6 pt-28">
      <Container>
        {/* <div className="flex flex-col gap-6">
          <Link
            href={paths.home.sdgs.overview}
            className="flex gap-1 font-medium"
          >
            <ChevronLeft /> <p>Kembali ke Halaman Infografik</p>
          </Link>
        </div> */}

        <div className="flex w-full justify-between items-center">
          <div className="w-full flex flex-col gap-2 py-4">
            <h1 className="text-[40px] text-blue-500">
              Pengentasan <span className="font-bold">Kemiskinan</span>
            </h1>
            <p className="text-xl text-blue-500">Kota Bandung</p>
          </div>

          <div className="border-2 border-blue-500 border-dashed rounded-md flex justify-center items-center px-4 py-2">
            <h1 className="text-[40px] text-blue-500 flex gap-2">
              Tahun <span className="font-bold">2024</span>
            </h1>
          </div>
        </div>

        {/* SEPARATOR */}
        <div className="w-full h-[2px] bg-blue-500" />

        <div className="py-16 flex w-full justify-center items-center gap-16">
          <Image
            src={dinner}
            alt="dinner family"
            width={400}
            height={400}
            className="max-h-[50vh] w-auto"
            objectFit="cover"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-[40px] text-blue-500 leading-[50px] ">
              Siapakah <br /> <span className="font-bold">Penduduk Miskin</span>
            </h1>
            <p>
              Adalah penduduk / keluarga yang memiliki rata - rata <br/> pengeluaran
              perkapita dibawah
            </p>
            <h1 className="text-[40px] font-bold text-blue-500">Rp. 124.124</h1>
          </div>
        </div>

        {/* SEPARATOR */}
        <div className="w-full h-[2px] bg-blue-500" />

        <div className="py-16 flex w-full justify-center items-center gap-16">
           <div className="flex flex-col gap-4">
            <h1 className="text-[40px] text-blue-500 leading-[50px] ">
              Seberpa  <span className="font-bold">Banyak?</span>
            </h1>
            <p>
              Adalah penduduk / keluarga yang memiliki rata - rata <br/> pengeluaran
              perkapita dibawah
            </p>
            <h1 className="text-[40px] font-bold text-blue-500">Rp. 124.124</h1>
          </div>
          <Image
            src={dinner}
            alt="dinner family"
            width={400}
            height={400}
            className="max-h-[50vh] w-auto"
            objectFit="cover"
          />
         
        </div>

        <div className="py-16 flex w-full justify-center items-center gap-16">
          <Image
            src={dinner}
            alt="dinner family"
            width={400}
            height={400}
            className="max-h-[50vh] w-auto"
            objectFit="cover"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-[40px] text-blue-500 leading-[50px] ">
              Kemiskinan dalam <br /> <span className="font-bold">5 Tahun Terakhir</span>
            </h1>
            <p>
              Adalah penduduk / keluarga yang memiliki rata - rata <br/> pengeluaran
              perkapita dibawah
            </p>
            <h1 className="text-[40px] font-bold text-blue-500">Rp. 124.124</h1>
          </div>
        </div>  
      </Container>
    </div>
  );
}

export default page;
