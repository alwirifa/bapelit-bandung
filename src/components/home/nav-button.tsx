"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <div
      className={cn(
        "w-full lg:w-auto flex flex-col items-start font-medium text-base text-blue-500 px-4 py-4 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none transition relative",
        isActive ? "bg-white/10 text-blue-500 relative flex items-center justify-center font-semibold" : "bg-transparent hover:bg-white/20 hover:text-blue-400",
        "rounded-lg"
      )}
    >
      <Link href={href} className="flex-1">
        {label}
      </Link>
      {isActive && (
        <div className="absolute -bottom-0 text-base text-blue-500">
          <p>••••</p>
        </div>
      )}
    </div>
  );
};

export default NavButton;
