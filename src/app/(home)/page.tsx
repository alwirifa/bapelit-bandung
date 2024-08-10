"use client";

import React, { Suspense } from "react";
import DataTerbaru from "@/components/home/home/data-terbaru/data-terbaru";
import Hero from "@/components/home/home/hero/hero";
import DataTerkumpul from "@/components/home/home/data-terkumpul/data-terkumpul";
import Separator from "@/components/home/home/separator/separator";
import CariData from "@/components/home/home/cari-data/cari-data";

function Page() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-blue-700 to-blue-500 py-8 pt-32">
        <Suspense>
          <Hero />
        </Suspense>
      </section>

      <section className="py-8">
        <DataTerbaru />
      </section>

      <section className="bg-gradient-to-b from-white from-30% to-blue-500/40 py-8">
        <DataTerkumpul />
      </section>

      <section className="bg-blue-500 py-16">
        <Suspense>
          <Separator />
        </Suspense>
      </section>

      <section className="py-8">
        <CariData />
      </section>
    </div>
  );
}

export default Page;
