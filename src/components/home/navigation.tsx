"use client";

import { useState } from "react";
import { useMedia } from "react-use";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { layoutConfig } from "@/components/home/layout/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import NavButton from "./nav-button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  const homeNavItems = layoutConfig.navItems.find(
    (navGroup) => navGroup.key === "home"
  );

  const routes = (homeNavItems?.items ?? [])
    .filter((item) => item.href || item.items)
    .map((item) => ({
      key: item.key,
      href: item.href ?? "",
      label: item.title!,
      items: item.items ?? [],
    }));

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-black focus:bg-white/30 transition"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 py-6">
            {routes.map((route) => (
              <div key={route.key}>
                {route.items.length > 0 ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button
                        variant={
                          route.href === pathname ? "secondary" : "ghost"
                        }
                        className="w-full justify-start"
                      >
                        {route.label}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>{route.label}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {route.items.map((subItem) => (
                        <DropdownMenuItem
                          key={subItem.href}
                          onClick={() => onClick(subItem.href!)}
                        >
                          {subItem.title}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    variant={route.href === pathname ? "secondary" : "ghost"}
                    onClick={() => route.href && onClick(route.href)}
                    className="w-full justify-start"
                  >
                    {route.label}
                  </Button>
                )}
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <div key={route.key} className="relative">
          {route.items.length > 0 ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <NavButton
                  href={route.href}
                  label={route.label}
                  isActive={pathname === route.href}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {route.items.map((subItem) => (
                  <DropdownMenuItem
                    key={subItem.href}
                    onClick={() => onClick(subItem.href!)}
                  >
                    {subItem.title}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <NavButton
              href={route.href}
              label={route.label}
              isActive={pathname === route.href}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
