import React from "react";
import Container from "./container";
import FooterLogo from "./footer-logo";
import { paths } from "@/paths";
import Link from "next/link";

interface FooterType {
  route: string;
  label: string;
}

const footerRoutes: FooterType[] = [
  {
    label: "Beranda",
    route: paths.home.main
  },
  {
    label: "RPJMD",
    route: paths.home.rpjmd
  },
  {
    label: "SDGS",
    route: paths.home.sdgs.overview
  },
  {
    label: "Regulasi",
    route: paths.home.regulations
  },
  {
    label: "Tentang",
    route: paths.home.about
  },
];

function Footer() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8">
      <div className="w-full bg-blue-500 text-white px-14 py-8 rounded-t-2xl flex flex-col md:flex-row items-center justify-between">
        <FooterLogo />
        <nav className="md:flex hidden  gap-6">
          {footerRoutes.map((item, index) => (
            <Link key={index} href={item.route}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Footer;
