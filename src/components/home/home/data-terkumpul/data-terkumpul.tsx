"use client"

import React from "react";
import Container from "../../layout/container";
import DataTerkumpulCard from "./card";

function DataTerkumpul() {
  return (
    <div className="">
      <Container>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Total data terkumpul</h1>
            <p>Menampilkan data terbaru akurat dan terverifikasi.</p>
          </div>

          <DataTerkumpulCard />
        </div>
      </Container>
    </div>
  );
}

export default DataTerkumpul;
