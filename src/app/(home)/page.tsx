import Container from "@/components/home/layout/container";
import React from "react";

function page() {
  return (
    <div className="bg-blue-500">
      <Container>
        <div className="flex flex-row w-full">
          <div className="w-full">
            <h1 className="text-5xl font-semibold text-white py-36 leading-relaxed">
              Cari data terkini penelitian di Jawa Barat disini
            </h1>
          </div>
          <div className="w-full"></div>
        </div>
      </Container>
    </div>
  );
}

export default page;
