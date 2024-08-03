import Container from "@/components/home/layout/container";
import React from "react";
import HeaderCard from "@/components/home/sdgs/header-card";
import sdgs from "@/components/home/sdgs/config";
import Separator from "@/components/home/sdgs/separator";

const Page: React.FC = () => {
  const goal = sdgs.find((sdg) => sdg.number === "11");

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
        <Separator
          targetNumber={goal.targetNumber2}
          targetDescription={goal.targetDescription2}
        />
        <Separator
          targetNumber={goal.targetNumber3}
          targetDescription={goal.targetDescription3}
        />
      </Container>
    </>
  );
};

export default Page;
