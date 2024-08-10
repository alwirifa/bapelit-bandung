"use client";

import React from "react";
import Container from "../../layout/container";
import CariDataCard from "./card";


function CariData() {
  return (
    <div className="">
      <Container>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-blue-500">
            <h1 className="text-4xl font-bold ">Cari data berdasarkan </h1>
            <p>Temukan data dengan kategori pilihan</p>
          </div>

          <CariDataCard />
        </div>
      </Container>
    </div>
  );
}

export default CariData;
