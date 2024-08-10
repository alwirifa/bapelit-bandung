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
    // params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="w-full  max-w-md px-4 py-3 rounded-md flex justify-between items-center gap-2 text-primary bg-white">
      <input
        className="outline-none placeholder:text-muted-foreground text-lg w-full"
        placeholder={placeholder}
        onInput={(e) => handleSearch((e.target as HTMLInputElement).value)}
        defaultValue={searchParams.get("query") ?? ""}
        aria-label="Search"
      />
      <SearchIcon color="#3A80F5" />
    </div>
  );
}
