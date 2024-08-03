import Container from "@/components/home/layout/container";
import React from "react";
import HeaderCard from "@/components/home/sdgs/header-card";
import sdgs from "@/components/home/sdgs/config";

const Page: React.FC = () => {

  const goal = sdgs.find(sdg => sdg.number === "17");

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
      </Container>
    </>
  );
};

export default Page;
