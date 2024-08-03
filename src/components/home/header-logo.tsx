import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const HeaderLogo = (props: Props) => {
  return (
    <div>
      <Link href={"/"}>
        <div className="items-center sm:relative   ">
          <Image src={"/assets/logo.svg"} alt="logo" height={200} width={200} />
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
