import Container from "@/components/home/layout/container";
import { paths } from "@/paths";
import { ChevronLeft } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface GoalCardProps {
  goalNumber: string;
  goalName: string;
  targetNumber: string;
  targetDescription: string;
  imageSrc: StaticImageData;
}

const HeaderCard: React.FC<GoalCardProps> = ({
  goalNumber,
  goalName,
  targetNumber,
  targetDescription,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Link href={paths.home.sdgs.overview} className="flex gap-1 font-medium">
        <ChevronLeft /> <p>Kembali ke Halaman SDGS</p>
      </Link>

      <div className="w-full relative flex flex-col sm:flex-row  gap-6 items-center">
        <div className="relative">
          <Image
            src={imageSrc}
            alt={goalName}
            height={400}
            width={400}
            className="max-h-60 object-contain max-w-max"
          />
        </div>
        <div className="sm:flex flex-col gap-4 w-full hidden ">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-blue-500">
              Tujuan {goalNumber}
            </h1>
            <p>{goalName}</p>
          </div>
          <div className="border-b border-[1px] border-blue-500 w-full"></div>
          <div>
            <p className="font-bold">
              {targetNumber}
              {", "}
              <span className="font-normal">{targetDescription}</span>
            </p>
          </div>
        </div>
        <div className="hidden md:block absolute top-0 right-0">
          <div className="flex gap-1">
            <p className="font-bold">
              T<span className="font-normal">: Tetap;</span>
            </p>
            <p className="font-bold">
              S<span className="font-normal">: Sementara;</span>
            </p>
            <p className="font-bold">
              SS<span className="font-normal">: Sangat Sementara;</span>
            </p>
            <p className="font-bold">
              n/a<span className="font-normal">: Tidak Ada;</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full relative mt-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-blue-500">
            Tujuan {goalNumber}
          </h1>
          <p>{goalName}</p>
        </div>
        <div className="block md:absolute top-0 right-0">
          <div className="flex flex-col sm:flex-row gap-1">
            <p className="font-bold">
              T<span className="font-normal">: Tetap;</span>
            </p>
            <p className="font-bold">
              S<span className="font-normal">: Sementara;</span>
            </p>
            <p className="font-bold">
              SS<span className="font-normal">: Sangat Sementara;</span>
            </p>
            <p className="font-bold">
              n/a<span className="font-normal">: Tidak Ada;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
