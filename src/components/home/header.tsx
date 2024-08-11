"use client"

import React from "react";
import Navigation from "@/components/home/navigation";
import HeaderLogo from "@/components/home/header-logo";
import { NavigationMenuDemo } from "./layout/demo";
import Link from "next/link";



type Props = {};

const Header = (props: Props) => {
  return (
    <header className="px-4 py-6 lg:px-14 border-b ">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between">
          <HeaderLogo />
          <div className="flex flex-row  items-center gap-4">
            <Navigation />
            <div>
              <Link href={'/sign-in'} className="max-h-max px-4 py-2 rounded-lg text-sm font-medium bg-blue-500 duration-300 ease-in-out hover:bg-blue-400 text-white cursor-pointer">
                Login
              </Link>
            </div>
          </div>
          {/* <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400" />
          </ClerkLoading> */}
        </div>
   
      </div>
    </header>
  );
};

export default Header;
