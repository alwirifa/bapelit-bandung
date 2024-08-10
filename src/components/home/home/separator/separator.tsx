"use client";

import React from "react";
import Container from "../../layout/container";
import Search from "./search";

function Separator() {
  return (
    <div>
      <Container>
        <div className="w-full flex flex-col gap-2 justify-center items-center text-white">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Ingin mencari data terbaru?
          </h1>
          <p className="text-base  text-[#89b6fd]">
            Semudah membalikkan tangan, cari data terbaru disini.
          </p>
          <div className="mt-6 flex justify-center w-full">
            <Search placeholder="Cth: RPJMD  Iklim, RPJD Pendidikan, dll ..." />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Separator;
