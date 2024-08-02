import React from "react";

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <div className="px-4 lg:px-14">
      <div className="max-w-screen-2xl mx-auto">
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Container;
