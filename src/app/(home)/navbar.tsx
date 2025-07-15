"use client";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, SearchIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const [isSearchbarOpenForSm, setIsSearchbarOpenForSm] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="flex items-center justify-between w-full h-full">
      <div className="flex gap-3 items-center shrink-0 pr-4">
        {isSearchbarOpenForSm ? (
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => setIsSearchbarOpenForSm(false)}
          >
            <ArrowLeft className="size-6" />
          </Button>
        ) : (
          <>
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            </Link>
            <h3 className="hidden sm:block text-xl">LiveDraft</h3>
          </>
        )}
      </div>

      {(isSearchbarOpenForSm || !isMobile) && <SearchInput />}

      <div className="flex gap-2 items-center pl-6">
        {!isSearchbarOpenForSm && (
          <>
            <Button
              onClick={() => setIsSearchbarOpenForSm(true)}
              variant={"ghost"}
              size={"icon"}
              className="md:hidden"
            >
              <SearchIcon />
            </Button>

            <OrganizationSwitcher
              afterCreateOrganizationUrl="/"
              afterLeaveOrganizationUrl="/"
              afterSelectOrganizationUrl="/"
              afterSelectPersonalUrl="/"
            />
          </>
        )}

        <UserButton />
      </div>
    </nav>
  );
}
