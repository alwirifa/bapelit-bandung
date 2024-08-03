import Container from "@/components/home/layout/container";
import React from "react";
import HeaderCard from "@/components/home/sdgs/header-card";
import sdgs from "@/components/home/sdgs/config";
import Separator from "@/components/home/sdgs/separator";
import { columns } from "@/components/home/sdgs/mengurangi-kemiskinan/table/target1.2/column";
import { DataTable } from "@/components/home/sdgs/mengurangi-kemiskinan/table/target1.2/data-table";

async function getData(): Promise<any[]> {
  return [
    {
      id: "1",
      no: "1.1.1",
      indikator: "Poverty Rate",
      sumber: "UN",
      satuan: "Percentage",
      2017: 15.5,
      2018: 14.0,
      2019: 13.2,
      2020: 12.8,
      2021: 11.9,
      2022: 11.5,
    },
    {
      id: "2",
      no: "1.1.2",
      indikator: "Extreme Poverty Rate",
      sumber: "World Bank",
      satuan: "Percentage",
      2017: 8.5,
      2018: 8.0,
      2019: 7.7,
      2020: 7.4,
      2021: 6.8,
      2022: 6.5,
    },
  ];
}

export default async function page() {
  const data = await getData();

  const goal = sdgs.find((sdg) => sdg.number === "10");

  if (!goal) {
    return <div>Goal not found</div>;
  }

  return (
    <>
      <Container>
        <HeaderCard
          goalNumber={goal.number}
          goalName={goal.name}
          targetNumber={goal.targetNumber}
          targetDescription={goal.targetDescription}
          imageSrc={goal.image}
        />
        <Separator
          targetNumber={goal.targetNumber}
          targetDescription={goal.targetDescription}
        />
        <div className="mt-4">
          <DataTable columns={columns} data={data} />
        </div>

        <Separator
          targetNumber={goal.targetNumber2}
          targetDescription={goal.targetDescription2}
        />

        <div className="mt-4">
          <DataTable columns={columns} data={data} />
        </div>

        <Separator
          targetNumber={goal.targetNumber3}
          targetDescription={goal.targetDescription3}
        />

        <div className="mt-4">
          <DataTable columns={columns} data={data} />
        </div>

        <Separator
          targetNumber={goal.targetNumber4}
          targetDescription={goal.targetDescription4}
        />

        <div className="mt-4">
          <DataTable columns={columns} data={data} />
        </div>

      </Container>
    </>
  );
}
