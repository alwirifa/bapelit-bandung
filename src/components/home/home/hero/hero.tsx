"use client"

import Image from 'next/image';
import React from 'react';
import { pjwalikota, pjwalikota_bg } from '../../../../../public/assets/icons';
import Container from '../../layout/container';
import Search from '@/components/search';
import { useMedia } from 'react-use';

function Hero() {
  const isMobile = useMedia("(max-width: 1024px)", false);

  if (isMobile) {
    return (
      <Container>
        <div className="flex flex-col gap-8 items-center ">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-2xl font-semibold text-white">
              Ragam data terkini penelitian Kota Bandung
            </h1>
            <p className="text-sm text-[#89b6fd]">
              Temukan dataset, visualisasi, infografik, artikel, dan mapset
              dengan cepat, mudah, dan akurat.
            </p>
            <div className='mt-8 w-full flex justify-center'>

            <Search placeholder="Cari data" />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="relative p-4">
              <Image
                src={pjwalikota_bg}
                width={300}
                height={300}
                alt="pj-walikota"
                className="object-contain"
              />
                   <div className="flex flex-col items-center w-full gap-1 text-white font-bold absolute -bottom-8  z-50">
              <h1 className="text-base">BAMBANG TIRTOYULIONO</h1>
              <p className="italic text-xs">Pj. Walikota Bandung</p>
            </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex flex-col gap-16 md:flex-row w-full pb-4 py-4">
        <div className="flex flex-col gap-6 justify-center w-full">
          <h1 className="text-2xl md:text-5xl font-semibold text-white md:leading-normal">
            Ragam data terkini penelitian Kota Bandung
          </h1>
          <p className="text-sm lg:text-base text-[#89b6fd]">
            Temukan dataset, visualisasi, infografik, artikel, dan mapset
            dengan cepat,<br /> mudah, dan akurat.
          </p>
          <div className="mt-12">
            <Search placeholder="Cari data" />
          </div>
        </div>
        <div className="w-full flex justify-center relative">
          <div className="relative p-4 flex justify-center">
            <Image
              src={pjwalikota_bg}
              width={500}
              height={500}
              alt="pj-walikota"
              className="z-40 object-contain"
            />
            {/* <div className="w-24 h-24 bg-blue-500 rounded-full absolute top-12 right-16"></div>
            <div className="w-16 h-16 bg-blue-400 rounded-full absolute bottom-0 left-6"></div>
            <div className="w-[450px] h-[450px] bg-blue-400 rounded-full absolute bottom-8 -translate-x-6 z-20"></div> */}
            <div className="flex flex-col gap-2 text-white font-bold absolute bottom-16 -right-16 z-50">
              <h1 className="text-2xl">BAMBANG TIRTOYULIONO</h1>
              <p className="italic">Pj. Walikota Bandung</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
