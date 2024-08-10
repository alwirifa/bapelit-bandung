"use client";

import { SearchIcon } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface SearchProps {
  placeholder: string;
}

export default function Search({ placeholder }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="w-full  max-w-xl px-4 py-3 rounded-lg flex justify-between items-center gap-2 text-primary bg-white">
      <input
        className="outline-none placeholder:text-muted-foreground text-base w-full italic"
        placeholder={placeholder}
        onInput={(e) => handleSearch((e.target as HTMLInputElement).value)}
        defaultValue={searchParams.get("query") ?? ""}
        aria-label="Search"
      />
      <div className="bg-blue-500 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-400 flex items-center justify-center gap-2 text-sm text-white">
        <SearchIcon color="#fff" />
        <p>Cari</p>
      </div>
    </div>
  );
}
